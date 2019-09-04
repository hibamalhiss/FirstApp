import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavComponent } from '../Nav/Nav.component';
import { AuthenticationService } from '../services/Authentication.service';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from '../Home/Home.component';
import { RegisterComponent } from '../Register/Register.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { appRoutes } from 'src/routes';
import { ListsComponent } from '../Lists/Lists.component';
import { MatchesComponent } from '../Matches/Matches.component';
import { MessagesComponent } from '../Messages/Messages.component';

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      ListsComponent,
      MatchesComponent,
      MessagesComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      BsDropdownModule.forRoot(),
      RouterModule.forRoot(appRoutes)
   ],
   providers: [
      AuthenticationService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
