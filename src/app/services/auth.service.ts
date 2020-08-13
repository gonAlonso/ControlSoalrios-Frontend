
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url: string;

  constructor(private httpClient: HttpClient) {
    this.url = 'http://localhost:5300/';
  }

  login(email: string, password: string): Observable<any> {
    const body = JSON.stringify({ email, password })
    const headers = new HttpHeaders( {'Content-type': 'application/json'} );
    return this.httpClient.post( this.url + 'admin/dologin', body, {headers});
  }

  logout(){
    localStorage.removeItem('currentUser')
  }
}
