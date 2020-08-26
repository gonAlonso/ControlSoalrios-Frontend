import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Empresa } from '../models/empresa';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import { Operario } from '../models/operario';
import { Solario } from '../models/solarios';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {
  private URL: string;
  private headers: HttpHeaders;
  private token;

  constructor(
    private httpClient: HttpClient,
    private authSrv: AuthService) {

    this.URL = `${environment.url}empresa`;
    try {
      this.token = this.authSrv.getUser().token;
    } catch (e) {
      console.log("Invalid Token");
    }

    this.headers = new HttpHeaders()
      .set('Content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('auth-token', this.token);
  }


  public getDataEmpresa(): Observable<any> {
    return this.httpClient.get( this.URL, {headers: this.headers } );
  }


  updateEmpresa(empresa: Empresa): Observable<any> {
    const body = JSON.stringify(empresa);
    return this.httpClient.put( `${this.URL}/update`, body, { headers: this.headers } );
  }

  addOperario(operario: Operario) {
    let body;
    try {
      body = JSON.stringify(operario);
    } catch (e) {
      console.log("Error parsing JSON of operario");
      return;
    }
    return this.httpClient.post(`${this.URL}/operario`, body, { headers: this.headers } );
  }

  deleteOperario(id: any) {
    return this.httpClient.delete( `${this.URL}/operario/${id}`, {headers: this.headers } );
  }

  addSolario(solario: Solario): Observable<any> {
    let body;
    try {
      body = JSON.stringify(solario);
    } catch (e) {
      console.log("Error parsing JSON of solario");
      return;
    }
    return this.httpClient.post(`${this.URL}/solario`, body, { headers: this.headers } );
  }

  deleteSolario(id: any): Observable<any> {
    return this.httpClient.delete( `${this.URL}/solario/${id}`, {headers: this.headers } );
  }
}
