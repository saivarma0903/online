import { NgModule } from '@angular/core';
import { SharedComponent } from './shared.component';
import { LoginComponent } from './components/login/login.component';
import { CommonModule } from './components/common/common.module';
import { LayoutComponent } from './components/layout/layout.component';
import { MatNativeDateModule } from '@angular/material/core';



@NgModule({
  declarations: [
    SharedComponent,
    LoginComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SharedComponent,
    LoginComponent,
    CommonModule,
    LayoutComponent
  ],
})
export class SharedModule { }
