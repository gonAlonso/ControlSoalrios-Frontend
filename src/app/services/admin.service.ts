import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpXsrfTokenExtractor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import { Login } from '../models/login';
import { Empresa } from '../models/empresa';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private headers: HttpHeaders;
  private user: Login;

  private onservable: Observable<any>;
  private listaEmpresas: Empresa[];


  constructor(private httpClient: HttpClient, private authSrv: AuthService) {
    this.user = this.authSrv.getUser();
    this.headers  = new HttpHeaders({
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'auth-token': this.user.token
    });
  }

  updateData() {
    this.onservable.subscribe(
      response => {
        this.listaEmpresas = response.datos;
      }, error => {}
    );
    return null;
  }

  public getAllEmpresas(): Observable<any> {
    if (!this.onservable) {
      console.log("Null observable");
      this.onservable = this.httpClient.get( environment.url + 'admin/empresas', {headers: this.headers } );
    }
    this.updateData();
    return this.onservable;
  }

  public getEmpresa(cif): Empresa {
    let salida = null;
    this.listaEmpresas.forEach(empresa => {
      if (empresa.cif.localeCompare(cif) === 0) {
        salida = empresa; }
    });
    return salida;
  }


  public removeEmpresa( id: string) {
    return this.httpClient.delete(  `${environment.url}admin/empresa/${id}`, {headers: this.headers } );
  }

  public removeUsuario( id: string) {
    return this.httpClient.delete(  `${environment.url}admin/usuario/${id}`, {headers: this.headers } );
  }

  public removeSesion( id: string) {
    return this.httpClient.delete(  `${environment.url}admin/sesion/${id}`, {headers: this.headers } );
  }

  public removeLogin( id: string) {
    return this.httpClient.delete(  `${environment.url}admin/login/${id}`, {headers: this.headers } );
  }

  public getAllLogins(): Observable<any> {
    return this.httpClient.get( environment.url + 'admin/login', {headers: this.headers } );
  }
}
