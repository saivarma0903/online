import { NgModule } from "@angular/core";
import { InputFieldsComponent } from './input-fields/input-fields.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import {MatButtonModule} from '@angular/material/button';
import { TextComponent } from './text/text.component';
import {HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
    declarations: [
    InputFieldsComponent,
    TextComponent
  ],
    imports: [
        MatInputModule,
        ReactiveFormsModule,
        FormsModule,
        BrowserModule,
        MatButtonModule,
        HttpClientModule,
        MatSnackBarModule
        
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
        MatSnackBarModule
    ]
  })
  export class CommonModule { }