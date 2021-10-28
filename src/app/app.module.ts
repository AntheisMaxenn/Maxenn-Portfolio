import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProjectComponent } from './project/project.component';
import { ContactMeComponent } from './contact-me/contact-me.component';

import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

// import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProjectComponent,
    ContactMeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule
    // MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
