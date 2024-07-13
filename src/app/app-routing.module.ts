import { NgModule } from '@angular/core';
import {  PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DashboardModule } from '../../projects/dashboard/src/app/app.module';
import { LoginComponent } from 'projects/shared/src/lib/components/login/login.component';

const routes: Routes = [
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'dashboard', loadChildren:()=>import('../../projects/dashboard/src/app/app.module').then(m => m.DashboardModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true}), DashboardModule.forRoot()],
  exports: [RouterModule]
})
export class AppRoutingModule { }