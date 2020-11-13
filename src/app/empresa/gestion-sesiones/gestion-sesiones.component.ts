import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Empresa } from 'src/app/models/empresa';
import { Solario } from 'src/app/models/solarios';
import { Usuario } from 'src/app/models/usuario';
import { EmpresasService } from 'src/app/services/empresas.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-gestion-sesiones',
  templateUrl: './gestion-sesiones.component.html',
  styleUrls: ['./gestion-sesiones.component.css']
})
export class GestionSesionesComponent implements OnInit {

  @Input() empresa: Empresa
  @Input() usuario: Usuario
  @Output() sendReload: EventEmitter<string>;

  // public empresa: Empresa;
  public sessionForm: FormGroup;

  constructor(
    private empSrv: EmpresasService,
    private userSrv: UsersService,
    private formBuilder: FormBuilder,
    private router: Router)
  {
    this.sendReload = new EventEmitter<string>();

    this.sessionForm = this.formBuilder.group({
      usuario: ['', [Validators.required]],
      solario: ['', [Validators.required]],
      duracion: ['1', [Validators.required]],
      operario: ['', [Validators.required]],
      pin: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
  if( this.empresa ) return
  this.empSrv.getDataEmpresa().subscribe(
    res => {
      this.empresa = res.datos;
      //console.log("Empresa cargada:" + JSON.stringify(this.empresa))
    }
    );
  }
/*
  ngOnChanges() {
    console.log("Usuario:", this.usuario)
    console.log("Empresa:", this.empresa)
  }
*/

  selectUser() {
    const event = this.userSrv.selectUser().subscribe(
      evtUser => {
        if (evtUser != undefined) {
          //console.log("UPDATE");
          this.usuario = evtUser;
        }
        event.unsubscribe();
      }
    );
  }


  saveNewSession() {
    let solario: Solario = this.sessionForm.get('solario').value
    let duracion: number = this.sessionForm.get('duracion').value
    const sesion = {
      energia: solario.potencia * (duracion/60),
      duracion: duracion,
      solario: solario._id,
      pin: this.sessionForm.get('pin').value,
      operario: this.sessionForm.get('operario').value,
      bono: undefined
    }
    this.sessionForm.controls["pin"].setValue('');
    const idusuario = this.usuario?._id;

    this.empSrv.registerSesion(idusuario, sesion).subscribe(
      res => {
        this.empSrv.notifyUpdate();
        this.router.navigate( ['empresa', {outlets: {secondary: ['usuario', idusuario]}}]);
      },
      error => {
        alert("No se  a podido registrar la sesion\nError: "+ error.error.mensaje);
        console.log("No se  a podido registrar la sesion\nError: "+ error.error.mensaje);
      }
    );
  }
}
