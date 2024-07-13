import { NgModule } from '@angular/core';
import { SharedComponent } from './shared.component';
import { LoginComponent } from './components/login/login.component';
import { CommonModule } from './components/common/common.module';



@NgModule({
  declarations: [
    SharedComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SharedComponent,
    LoginComponent,
    CommonModule
  ]
})
export class SharedModule { }
