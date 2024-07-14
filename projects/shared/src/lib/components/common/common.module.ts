import { NgModule } from "@angular/core";
import { InputFieldsComponent } from './input-fields/input-fields.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { MatButtonModule } from '@angular/material/button';
import { TextComponent } from './text/text.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HeaderComponent } from './header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from "@angular/router";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from "@angular/material/core";
import { SeparatorComponent } from './separator/separator.component';
import { ReviewComponent } from './review/review.component';



@NgModule({
  declarations: [
    InputFieldsComponent,
    TextComponent,
    HeaderComponent,
    SeparatorComponent,
    ReviewComponent,
  ],
  imports: [
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    MatButtonModule,
    HttpClientModule,
    MatSnackBarModule,
    MatSelectModule,
    MatSidenavModule,
    MatIconModule,
    RouterModule,
    MatDatepickerModule,
    MatNativeDateModule

  ],
  exports: [
    InputFieldsComponent,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    MatButtonModule,
    TextComponent,
    HttpClientModule,
    MatSnackBarModule,
    MatSelectModule,
    MatSidenavModule,
    HeaderComponent,
    MatIconModule,
    RouterModule,
    MatDatepickerModule,
    MatNativeDateModule,
    SeparatorComponent
  ],

})
export class CommonModule { }