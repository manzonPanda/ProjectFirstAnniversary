import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent,ErrorSnackbarComponent } from './app.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
// import {Howl, Howler} from 'howler';

@NgModule({
  declarations: [
    AppComponent,
    ErrorSnackbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    // Howl
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
