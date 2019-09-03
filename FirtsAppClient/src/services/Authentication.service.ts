import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators' ;
import { JwtHelperService } from "@auth0/angular-jwt";


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


LOGIN_URL:string = 'http://localhost:5000/api/Authentication/login';
REGISTER_URL:string = 'http://localhost:5000/api/Authentication/register';
jwtHelper = new JwtHelperService();
decodedToken : any;
constructor(private http:HttpClient) { }

logIn(user):Observable<any>{
  return this.http.post(this.LOGIN_URL , user).pipe(
     map(tokenResponse => {
        if(tokenResponse != null){
         var token = tokenResponse.token;
         localStorage.setItem('token', token);
         this.decodedToken = this.jwtHelper.decodeToken(token);
      }
     })
  );
}

register(user):Observable<any>{
  return this.http.post(this.REGISTER_URL , user);
}

isLoggedIn(){
  var token = localStorage.getItem('token');
  return !this.jwtHelper.isTokenExpired(token);

}
logOut(){
  localStorage.removeItem('token');
}
}
