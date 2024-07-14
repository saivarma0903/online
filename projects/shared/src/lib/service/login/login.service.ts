import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }


  registerUser(registerInfo:any){
    return this.http.post(`${environment.apiUrl}/user-register`,registerInfo)
  }
  loginUser(registerInfo:any){
    return this.http.post(`${environment.apiUrl}/login`,registerInfo)
  }
}
