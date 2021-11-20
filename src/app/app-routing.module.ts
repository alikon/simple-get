import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { JoomlaComponent } from './joomla/joomla.component';
import { JuserDetailComponent } from './juser-detail/juser-detail.component';
import { LocalComponentComponent } from './local-component/local-component.component';
import { JsearchComponent } from './jsearch/jsearch.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from  './services/authGuard'
import { RegisterComponent } from './register/register.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';



const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'page', component: HomeComponent
  },
  {
    path: 'detail/:id', component: DetailComponent
  },
  {
    path: 'joomla', component: JoomlaComponent
  },
  {
    path: 'juserdetail/:id', component: JuserDetailComponent
  }
  ,
  {
    path: 'userpage', component: JoomlaComponent
  },
  {
    path: 'search', component:  JsearchComponent
  }
  ,
  {
    path: 'login', component:  LoginComponent
  }
  ,
  {
    path: 'local', component:  LocalComponentComponent, canActivate: [AuthGuard]
  },
  { path: 'register', component: RegisterComponent }
  ,
  { path: 'users', component: ListComponent, canActivate: [AuthGuard] }
  ,
  { path: 'users/edit/:id', component: EditComponent }

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
