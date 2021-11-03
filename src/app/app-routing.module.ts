import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { JoomlaComponent } from './joomla/joomla.component';
import { JuserDetailComponent } from './juser-detail/juser-detail.component';
import { LocalComponentComponent } from './local-component/local-component.component';
import { JsearchComponent } from './jsearch/jsearch.component';

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
  // {
  //   path: 'local', component: LocalComponentComponent
  // }
  // ,
  {
    path: 'search', component:  JsearchComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
