import { Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/models/empresa';
import { AuthService } from 'src/app/services/auth.service';
import { EmpresasService } from 'src/app/services/empresas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion-empresa',
  templateUrl: './gestion-empresa.component.html',
  styleUrls: ['./gestion-empresa.component.css']
})
export class GestionEmpresaComponent implements OnInit {

  cifEmpresa: string;
  public empresa: Empresa;
  public error: string;

  constructor( private empSrv: EmpresasService,
               private authService: AuthService,
               private router: Router) {}

  ngOnInit() {
    if (!this.authService.getUser()) {
      this.router.navigateByUrl( this.router.createUrlTree( ['/']));
      return;
    }
    this.empSrv.notification.subscribe(
      evt => {this.reloadEmpresa();}
    );
    this.reloadEmpresa();
  }

  reloadEmpresa() {
    this.empSrv.getDataEmpresa().subscribe(
      data => {
        this.empresa = data.datos;
      },
      error => {
        this.error = error.statusText;
        //this.router.navigateByUrl( this.router.createUrlTree( ['/login']));
      }
    );
  }
}
