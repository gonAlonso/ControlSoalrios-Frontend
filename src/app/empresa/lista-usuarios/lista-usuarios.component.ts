import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { EmpresasService } from 'src/app/services/empresas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {
  @Output() outUsuarioSelected = new EventEmitter<string>();

  public listaUsuariosActivos: Usuario[];
  public listaUsuariosEliminados: Usuario[];
  private listaUsuariosRaw: Usuario[];
  constructor( private empSrv: EmpresasService,
               private router: Router) { }

  ngOnInit() {
    this.empSrv.getListaUsuarios().subscribe(
      data => {
        this.listaUsuariosRaw = data.datos;
        this.filtrarUsuarios(null);
      },
      error => {
        // Show error message
        console.log("Error al cargar la lista de usuarios");
      }
    );
  }

  filtrarUsuarios(filter: string) {
    this.listaUsuariosActivos = [];
    this.listaUsuariosEliminados = [];
    this.listaUsuariosRaw.forEach( e => this.listaUsuariosActivos.push(e));

    this.listaUsuariosEliminados = this.listaUsuariosRaw.filter(
      element =>  element.estado != 'ELIMINADO');

    this.listaUsuariosActivos = this.listaUsuariosRaw.filter(
      element => {
        if (element.estado != "ACTIVO" ) {  return false; }
        else if (filter == undefined || filter == null) { return true; }
        else if ( element.nombre.toLocaleUpperCase().includes(filter.toLocaleUpperCase()) ) { return true; }
        else if ( element.dni.toLocaleUpperCase().includes(filter.toLocaleUpperCase()) ) { return true; }
        else if ( element.email.toLocaleUpperCase().includes(filter.toLocaleUpperCase()) ) { return false; }
        else return false;
      }
    );
  }

  loadUser(e, id: string) {
    e.preventDefault();
    this.router.navigate( ['empresa', {outlets: {secondary: ['usuario', id]}}]);
  }

  buscaUsuario(texto) {
    this.filtrarUsuarios(texto);
  }

}
