import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { JoomlaComponent } from './joomla/joomla.component';
import { JuserDetailComponent } from './juser-detail/juser-detail.component';
import { MessageService } from './services/message.service';
import { MessagesComponent } from './messages/messages.component';
import { LoggingInterceptor } from './interceptors/logging-interceptor';
import { ReactiveFormsModule } from '@angular/forms';
import { JsearchComponent } from './jsearch/jsearch.component';
import { LocalComponentComponent } from './local-component/local-component.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
// used to create fake backend
import { fakeBackendProvider } from './interceptors/fake-backend';
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AlertComponent } from './alert/alert.component';
import { RegisterComponent } from './register/register.component';
import { ListComponent } from './list/list.component';
import { JwtInterceptor } from './interceptors/jwt-interceptor';
import { EditComponent } from './edit/edit.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		DetailComponent,
		JoomlaComponent,
		JuserDetailComponent,
		MessagesComponent,
		JsearchComponent,
		LocalComponentComponent,
		MenuComponent,
		LoginComponent,
		AlertComponent,
		RegisterComponent,
		ListComponent,
		EditComponent,
	],
	imports: [
		BrowserModule,
		FormsModule,
		AppRoutingModule,
		HttpClientModule,
		ReactiveFormsModule,
		BrowserAnimationsModule, // required animations module

	],
	exports: [AlertComponent],
	providers: [
		//{ provide: 'articlesUrl', useValue: 'https://www.alikonweb.it/api/index.php/v1/content/articles' },
		{ provide: 'articlesUrl', useValue: environment.articlesEndpoint },
		//{ provide: 'usersUrl', useValue: 'https://www.alikonweb.it/api/index.php/v1/users' },
		{ provide: 'usersUrl', useValue: environment.usersEndpoint },
		{
			provide: HTTP_INTERCEPTORS,
			useClass: LoggingInterceptor,
			multi: true
		},
		{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
		MessageService,
		 // provider used to create fake backend
		 fakeBackendProvider
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
