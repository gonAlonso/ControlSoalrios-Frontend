import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Empresa } from '../models/empresa';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import { Operario } from '../models/operario';
import { Solario } from '../models/solarios';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  private URL: string;

  constructor(
    private httpClient: HttpClient,
    private authSrv: AuthService) {

    this.URL = `${environment.url}empresa`;
  }

  getHeaders() {
    try {
      return new HttpHeaders()
      .set('Content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('auth-token', this.authSrv.getUser().token);
    } catch (e) {
      //TODO: Send user to login again or try autorelogin
      console.log("Invalid Token!! Must fix if");
    }
  }



  registerEmpresa( empresa: unknown): Observable<any> {
    let body;
    try {
      body = JSON.stringify(empresa);
    } catch (e) {
      console.log("Error parsing JSON of empresa");
      return;
    }
    const thisHeaders = new HttpHeaders()
    .set('Content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    return this.httpClient.post(`${this.URL}/register`, body,  {headers: thisHeaders } );
  }


  public getDataEmpresa(): Observable<any> {
    return this.httpClient.get( this.URL, {headers: this.getHeaders() } );
  }


  updateEmpresa(empresa: Empresa): Observable<any> {
    const body = JSON.stringify(empresa);
    return this.httpClient.put( `${this.URL}/update`, body, { headers: this.getHeaders() } );
  }

  addOperario(operario: Operario) {
    let body;
    try {
      body = JSON.stringify(operario);
    } catch (e) {
      console.log("Error parsing JSON of operario");
      return;
    }
    return this.httpClient.post(`${this.URL}/operario`, body, { headers: this.getHeaders() } );
  }

  deleteOperario(id: any) {
    return this.httpClient.delete( `${this.URL}/operario/${id}`, {headers: this.getHeaders() } );
  }

  addSolario(solario: Solario): Observable<any> {
    let body;
    try {
      body = JSON.stringify(solario);
    } catch (e) {
      console.log("Error parsing JSON of solario");
      return;
    }
    return this.httpClient.post(`${this.URL}/solario`, body, { headers: this.getHeaders() } );
  }

  deleteSolario(id: any): Observable<any> {
    return this.httpClient.delete( `${this.URL}/solario/${id}`, {headers: this.getHeaders() } );
  }

  getListaUsuarios(): Observable<any> {
    return this.httpClient.get( `${this.URL}/usuarios/`, {headers: this.getHeaders() } );
  }

  addUsuario(usuario: Usuario): Observable<any> {
    let body;
    try {
      body = JSON.stringify(usuario);
    } catch (e) {
      console.log("Error parsing JSON of usuario");
      return;
    }
    return this.httpClient.post(`${this.URL}/usuario`, body, { headers: this.getHeaders() } );
  }

  getUsuario(id: string): Observable<any> {
    return this.httpClient.get( `${this.URL}/usuario/${id}`, {headers: this.getHeaders() } );
  }

  updateUsuario(id, usuario: Usuario): Observable<any> {
    let body;
    try {
      body = JSON.stringify(usuario);
    } catch (e) {
      console.log("Error parsing JSON of usuario");
      return;
    }
    return this.httpClient.put(`${this.URL}/usuario/${id}`, body, { headers: this.getHeaders() } );
  }

  eliminarUsuaio(id: string): Observable<any> {
    return this.httpClient.delete( `${this.URL}/usuario/${id}`, {headers: this.getHeaders() } );
  }

  addBono(user: string, bono: any): Observable<any> {
    return this.httpClient.post( `${this.URL}/bono/${user}`, bono,  {headers: this.getHeaders() } );
  }
}
