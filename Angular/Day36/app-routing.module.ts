import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { authGuard } from './auth.guard';
import { DetailsComponent } from './details/details.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';

const routes: Routes = [
  {
    path:"",pathMatch:"full",redirectTo:"/login"
  },
  {
    path:"login",component:LoginComponent
  },
  {
    path:"home",loadChildren:()=>import("./dashboard/dashboard.module").then(m=>m.DashboardModule)
  },
  {
    path:"**",component:NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
