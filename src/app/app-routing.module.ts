import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from "./admin/dashboard/dashboard.component";
import {AboutComponent} from "./admin/about/about.component";
import {MyProfileComponent} from "./admin/my-profile/my-profile.component";

const routes: Routes = [
  {path:"dashboard", component:DashboardComponent},
  {path:"about", component:AboutComponent},
  {path:"my-profile", component:MyProfileComponent},
  {path:"", redirectTo:"dashboard", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
