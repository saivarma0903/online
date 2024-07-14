import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AdmissionFormComponent } from './components/admission-form/admission-form.component';


const routes: Routes = [
  {path:'dashboard',component:AppComponent,children:[
    {path:'register',component:AdmissionFormComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
