import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/Authentication.service';
@Component({
  selector: 'app-Nav',
  templateUrl: './Nav.component.html',
  styleUrls: ['./Nav.component.css']
})
export class NavComponent implements OnInit {

  user = {
    username: '',
    password: ''
  };
  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
  }

  logIn(){
    console.log(this.user);
    this.auth.logIn(this.user).subscribe((result) => {
      console.log("logedIn successfully");
   }, ( error) => {
     console.log("logIn error");

   });
  }

}
