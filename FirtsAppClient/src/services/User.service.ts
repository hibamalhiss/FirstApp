import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/_Models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  baseUrl = "http://localhost:5000/api/";
  constructor(private http:HttpClient) { }

  getUsers():Observable<User[]> {

    return this.http.get<User[]>(this.baseUrl + 'user' );

  }

  getUser(id:number):Observable<User>{
    return this.http.get<User>(this.baseUrl+'user/'+id);
    
  }

}
