import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
//import { TypicodeService } from './services/typicode.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
//import { UserService } from './services/user.service';
import { JoomlaComponent } from './joomla/joomla.component';
import { JuserDetailComponent } from './juser-detail/juser-detail.component';
//import { AppHttpInterceptor } from './interceptors/resterror-interceptor';
import { MessageService } from './services/message.service';
import { MessagesComponent } from './messages/messages.component';
import { LoggingInterceptor } from './interceptors/logging-interceptor';
import { ReactiveFormsModule } from '@angular/forms';
import { JsearchComponent } from './jsearch/jsearch.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		DetailComponent,
		JoomlaComponent,
		JuserDetailComponent,
		MessagesComponent,
		JsearchComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		AppRoutingModule,
		HttpClientModule,
		ReactiveFormsModule
	],
	providers: [
		{ provide: 'articlesUrl', useValue: 'http://localhost/cloud/api/index.php/v1/content/articles' },
		{ provide: 'usersUrl', useValue: 'http://localhost/cloud/api/index.php/v1/users' },
		{
			provide: HTTP_INTERCEPTORS,
			useClass: LoggingInterceptor,
			multi: true
		},
		MessageService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
