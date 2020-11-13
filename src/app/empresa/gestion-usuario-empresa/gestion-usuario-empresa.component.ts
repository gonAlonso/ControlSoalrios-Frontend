import { Component, OnInit } from '@angular/core';
import { EmpresasService } from 'src/app/services/empresas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsersService } from 'src/app/services/users.service';
import { Empresa } from 'src/app/models/empresa';

@Component({
  selector: 'app-gestion-usuario-empresa',
  templateUrl: './gestion-usuario-empresa.component.html',
  styleUrls: ['./gestion-usuario-empresa.component.css']
})
export class GestionUsuarioEmpresaComponent implements OnInit {

  public usuario: Usuario
  public empresa: Empresa

  constructor(
    private empSrv: EmpresasService,
    private usrSrv: UsersService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.loadUser()
    this.loadEmpresa()
  }

  loadEmpresa() {
    this.empSrv.getDataEmpresa().subscribe(
      data => {
        this.empresa = data.datos
      }
    )
  }

  loadUser() {
    const id = this.activatedRoute.snapshot.params.id;
    this.empSrv.getUsuario(id).subscribe(
      data => {
        this.usuario = data.datos as Usuario;
      },
      error => {
        console.log("Error al cargar la lista de usuarios");
      }
    );
  }

  guardarUsuario(usuario: Usuario) {
    this.empSrv.updateUsuario(this.usuario._id, usuario ).subscribe(
      ok => {
        this.loadUser();
        this.usrSrv.reloadUsers();
        //TODO: Mostrar proceso OK
      },
      err => {
        alert("No se ha podido guardar la modificación");
      }
    );
  }

  eliminarUsuario() {
    if (!confirm("Está seguro/a de que desea eleminar el usuario/a para siempre?")) { return; }
    this.empSrv.eliminarUsuaio(this.usuario._id).subscribe(
      ok => {
        this.router.navigateByUrl( this.router.createUrlTree( [`/empresa/`]));
      },
      ko => {
        alert("No se ha podid eliminar el usuario");
      }
    )
  }

  reloadEvent(evt) {
    this.loadUser();
  }

  show( elm ) {
    elm.style.classList.add('show')
  }

}
