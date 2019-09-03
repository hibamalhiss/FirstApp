import { Component, OnInit, Output , EventEmitter } from '@angular/core';
import { AuthenticationService } from 'src/services/Authentication.service';

@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() exitRegisterMode = new EventEmitter();

  user = {
    username: "" ,
    password: ""
  };

  constructor(private auth:AuthenticationService) { }

  ngOnInit() {
  }

  register() {
    this.auth.register(this.user).subscribe((result) => {
      console.log("registerd successfully");
      alert("registerd successfully");
   }, ( error) => {
     console.log("register error");
     alert("register error");

   });
  }

  cancel() {
    this.exitRegisterMode.emit(false);
  }

}
