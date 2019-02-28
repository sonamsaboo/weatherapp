import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {path:"", component: AdminloginComponent},
  { path: 'home', component: HomeComponent },
  { path: 'form', component: FormComponent },
  {path: 'adminlogin', component:AdminloginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
