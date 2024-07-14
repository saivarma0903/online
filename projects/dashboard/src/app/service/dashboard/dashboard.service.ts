import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(public http: HttpClient) {

  }

  getGrade() {
    return this.http.get(`${environment.apiUrl}/grade`)
  }
  getGender() {
    return this.http.get(`${environment.apiUrl}/gender`)
  }
}
