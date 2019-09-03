import { Component, OnInit } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { AuthenticationService } from 'src/services/Authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(public auth: AuthenticationService) { }

  ngOnInit() {
    var token = localStorage.getItem('token');
    if(token){
      this.auth.decodedToken = this.auth.jwtHelper.decodeToken(token)
    }
  }
  
}



