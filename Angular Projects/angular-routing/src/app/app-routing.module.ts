import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { MyAuthGaurd } from './myauthgaurd';

// API hold all routing path details. 
const routes: Routes = [
  {path:"\aboutus",component:AboutusComponent},
  {path:"\contactus",component:ContactusComponent},
  {path:"\login",component:LoginComponent},
  {path:"\home",component:DashboardComponent,canActivate:[MyAuthGaurd]},
  {path:"",redirectTo:"\login",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
