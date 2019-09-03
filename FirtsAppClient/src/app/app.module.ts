import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavComponent } from '../Nav/Nav.component';
import { AuthenticationService } from '../services/Authentication.service';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from '../Home/Home.component';
import { RegisterComponent } from '../Register/Register.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      BsDropdownModule.forRoot()
   ],
   providers: [
      AuthenticationService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
