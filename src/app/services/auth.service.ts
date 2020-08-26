
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    const body = JSON.stringify({ email, password });
    const headers = new HttpHeaders( {'Content-type': 'application/json'} );

    const response = this.httpClient.post( environment.url + 'login', body, {headers});
    response.subscribe(
      result => {
        const datos = JSON.stringify({email, token: result['token'], type: result['type']});
        localStorage.setItem('currentUser', datos);
      },
      error => {
        console.log( 'Login failed');
      }
    );
    return response;
  }


  adminlogin(email: string, password: string): Observable<any> {
    const body = JSON.stringify({ email, password });
    const headers = new HttpHeaders( {'Content-type': 'application/json'} );

    const response = this.httpClient.post( environment.url + 'admin/dologin', body, {headers});
    response.subscribe(
      result => {
        const datos = JSON.stringify({email, token: result['token'], type: result['type']});
        localStorage.setItem('currentUser', datos);
      },
      error => {
        console.log( 'Login failed');
      }
    );
    return response;
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

  getUser() {
    const data = localStorage.getItem('currentUser');
    try {
      return JSON.parse( data ) as Login;
    } catch (e) {
      return undefined;
    }
  }
}
