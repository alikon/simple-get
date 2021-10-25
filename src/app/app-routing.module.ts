import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { JoomlaComponent } from './joomla/joomla.component';
import { JuserDetailComponent } from './juser-detail/juser-detail.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'joomla', component: JoomlaComponent
  },
  {
    path: 'detail/:id', component: DetailComponent
  },
  {
    path: 'juserdetail/:id', component: JuserDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
