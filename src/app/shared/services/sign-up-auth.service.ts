import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Iusers } from "../models/user's";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SignUpAuthService {
  auth_url: string = `${environment.auth_url}`;
  login_url: string = `${this.auth_url}/api/auth/login`;
  register_url: string = `${this.auth_url}/api/auth/register`;

  constructor(private _http: HttpClient) {}

  registerUser(userDetails: Iusers): Observable<any> {
    return this._http.post<any>(`${this.register_url}`, userDetails);
  }

  logInUser(userDetails: Iusers): Observable<any> {
    return this._http.post<any>(`${this.login_url}`, userDetails);
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  saveUserRole(userRole: string) {
    localStorage.setItem('userRole', userRole);
  }

  getUserRole() {
    return localStorage.getItem('userRole');
  }
}
