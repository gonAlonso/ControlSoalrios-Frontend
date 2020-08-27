import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupName, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
import { EmpresasService } from 'src/app/services/empresas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.css']
})
export class AddUsuarioComponent implements OnInit {

  public addUserForm: FormGroup;
  constructor( private formBuilder: FormBuilder,
               private empSrv: EmpresasService,
               private router: Router) { }

  ngOnInit() {
    this.addUserForm = new FormGroup({});
    this.addUserForm = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      dni: ['', [Validators.required]],
      email: ['', [Validators.required]],
      fototipo: ['', [Validators.required]],
      tlf: ['', [Validators.required]],
    });
  }

  guardarUsuario(form: FormGroup) {
    if (!form.valid) {
      console.log("Guardar Usuario invalid form data");
      alert("Datos de Usuario incorrectos");
      return;
    }
    const newUsuario = {
      nombre: form.get('nombre').value,
      dni: form.get('dni').value,
      email:  form.get('email').value,
      fototipo:  form.get('fototipo').value,
      tlf:  form.get('tlf').value,
    };
    this.empSrv.addUsuario(newUsuario as Usuario).subscribe(
      done => {
        this.router.navigateByUrl( this.router.createUrlTree( [`/empresa/usuario/${done.datos._id}`]));
      },
      msg => {
        alert("No se ha podido guardar el usuario: "+ msg.error.mensaje);
      }
    );
  }

}
