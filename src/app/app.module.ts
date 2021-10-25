import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
//import { TypicodeService } from './services/typicode.service';
import { HttpClientModule } from "@angular/common/http";
import { UserService } from './services/user.service';
import { JoomlaComponent } from './joomla/joomla.component';
import { JuserDetailComponent } from './juser-detail/juser-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent,
    JoomlaComponent,
    JuserDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: 'apiUrl', useValue: 'http://localhost/cloud/api/index.php/v1/content/articles' },
    { provide: 'joomlaUrl', useValue: 'http://localhost/cloud/api/index.php/v1/users' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
