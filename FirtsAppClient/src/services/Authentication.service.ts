import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators' ;
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

constructor(private http:HttpClient) { }

LOGIN_URL:string = 'http://localhost:5000/api/Authentication/login';
REGISTER_URL:string = 'http://localhost:5000/api/Authentication/register';

logIn(user):Observable<any>{
  return this.http.post(this.LOGIN_URL , user).pipe(
     map(tokenResponse => {
        if(tokenResponse != null){
         localStorage.setItem('token', tokenResponse.token);
      }
     })
  );
}

register(user):Observable<any>{
  return this.http.post(this.REGISTER_URL , user);
}
}
