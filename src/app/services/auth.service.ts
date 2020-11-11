
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private notifications: EventEmitter<string>

  constructor(private httpClient: HttpClient) {
    this.notifications = new EventEmitter<string>()
  }

  login(email: string, password: string): Observable<any> {
    const body = JSON.stringify({ email, password });
    const headers = new HttpHeaders( {'Content-type': 'application/json'} );

    const response = this.httpClient.post( environment.url + 'login', body, { headers } )
    response.subscribe(
      result => {
        const datos = JSON.stringify( { email, token: result['token'], type: result['type'] } )
        localStorage.setItem( 'currentUser', datos )
        this.notifications.emit( 'login' )
      },
      error => {
        console.log( 'Login failed')
      }
    );
    return response;
  }


  adminlogin(email: string, password: string): Observable<any> {
    const body = JSON.stringify({ email, password });
    const headers = new HttpHeaders( {'Content-type': 'application/json'} );

    const response = this.httpClient.post( environment.url + 'admin/dologin', body, { headers } )
    response.subscribe(
      result => {
        const datos = JSON.stringify( { email, token: result['token'], type: result['type'] } )
        localStorage.setItem( 'currentUser', datos )
        this.notifications.emit( 'admin_login' )
      },
      error => {
        console.log( 'Login failed');
      }
    );
    return response;
  }

  logout() {
    localStorage.removeItem( 'currentUser' )
    this.notifications.emit( 'logout' )
  }

  getUser() {
    const data = localStorage.getItem( 'currentUser' )
    try {
      return JSON.parse( data ) as Login;
    } catch (e) {
      return undefined;
    }
  }

  getNotifications() { return this.notifications }
}
