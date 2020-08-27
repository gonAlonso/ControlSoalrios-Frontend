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
  @Output() outUsuarioSlected = new EventEmitter<string>();

  public listaUsuarios: Usuario[];
  constructor( private empSrv: EmpresasService,
               private router: Router) { }

  ngOnInit() {
    this.empSrv.getListaUsuarios().subscribe(
      data => {
        this.listaUsuarios = data.datos;
      },
      error => {
        // Show error message
        console.log("Error al cargar la lista de usuarios");
      }
    );
  }

  loadUser(e, id: string) {
    e.preventDefault();
    this.router.navigateByUrl( this.router.createUrlTree( [`/empresa/usuario/${id}`]));
  }

}
