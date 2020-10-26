import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupName, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
import { EmpresasService } from 'src/app/services/empresas.service';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.css']
})
export class AddUsuarioComponent implements OnInit {

  //public addUserForm: FormGroup;
  constructor(
    private empSrv: EmpresasService,
    private router: Router,
    private usrSrv: UsersService ) { }

  ngOnInit() {}

  guardarUsuario( user ) {
    console.log( "NEW User: " + JSON.stringify(user) );
    this.empSrv.addUsuario(user as Usuario).subscribe(
      done => {
        this.usrSrv.reloadUsers();
        this.router.navigate( ['empresa', {outlets: {secondary: ['usuario', done.datos._id]}}]);
      },
      msg => {
        alert("No se ha podido guardar el usuario: "+ msg.error.mensaje);
      }
    );
  }

}
