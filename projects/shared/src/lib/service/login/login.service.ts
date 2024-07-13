import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }


  registerUser(registerInfo:any){
    return this.http.post('http://localhost:8080/api/user-register',registerInfo)
  }
  loginUser(registerInfo:any){
    return this.http.post('http://localhost:8080/api/login',registerInfo)
  }
}
