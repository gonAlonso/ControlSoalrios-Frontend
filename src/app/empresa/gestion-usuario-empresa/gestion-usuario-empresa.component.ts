import { Component, OnInit } from '@angular/core';
import { EmpresasService } from 'src/app/services/empresas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-gestion-usuario-empresa',
  templateUrl: './gestion-usuario-empresa.component.html',
  styleUrls: ['./gestion-usuario-empresa.component.css']
})
export class GestionUsuarioEmpresaComponent implements OnInit {

  public usuario: Usuario;

  constructor(private empSrv: EmpresasService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.loadUser();
  }

  loadUser() {
    const id = this.activatedRoute.snapshot.params.id;
    this.empSrv.getUsuario(id).subscribe(
      data => {
        this.usuario = data.datos as Usuario;
        console.log("User loaded:" + JSON.stringify( this.usuario));
      },
      error => {
        console.log("Error al cargar la lista de usuarios");
      }
    );
  }

  guardarUsuario(form: FormGroup) {
    if (!form.valid) {
      alert("Datos de usuario incorrectos");
      return;
    }
    const nuevoUsuario = {
        nombre: form.get('nombre').value,
        dni: form.get('dni').value,
        tlf: form.get('tlf').value.toString(),
        email: form.get('email').value,
        fototipo: form.get('fototipo').value,
    };
    this.empSrv.updateUsuario(this.usuario._id, nuevoUsuario as Usuario).subscribe(
      ok => {
        this.loadUser();
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

}
