import { Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/models/empresa';
import { AuthService } from 'src/app/services/auth.service';
import { EmpresasService } from 'src/app/services/empresas.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-gestion-empresa',
  templateUrl: './gestion-empresa.component.html',
  styleUrls: ['./gestion-empresa.component.css']
})
export class GestionEmpresaComponent implements OnInit {

  public cifEmpresa: string
  public empresa: Empresa
  public error: string
  public showMenu: boolean
  public title: string

  constructor(
    private empSrv: EmpresasService,
    private authService: AuthService,
    private router: Router)
  {
    this.showMenu = false
    this.title = environment.title

    this.router.events.subscribe( e=> {
      this.hideMenuBar( null )
    })
  }

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

  toggleMenuBar(evt) {
    evt?.preventDefault()
    this.showMenu = !this.showMenu
  }

  showMenuBar(evt) {
    evt?.preventDefault()
    this.showMenu = true
  }

  hideMenuBar(evt) {
    evt?.preventDefault()
    this.showMenu = false
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
    )
  }

  logOut(evt) {
    evt.preventDefault()
    this.authService.logout()
  }
}
