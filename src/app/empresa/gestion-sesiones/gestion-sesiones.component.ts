import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Empresa } from 'src/app/models/empresa';
import { Usuario } from 'src/app/models/usuario';
import { EmpresasService } from 'src/app/services/empresas.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-gestion-sesiones',
  templateUrl: './gestion-sesiones.component.html',
  styleUrls: ['./gestion-sesiones.component.css']
})
export class GestionSesionesComponent implements OnInit {

  @Input() user: Usuario;
  @Output() sendReload: EventEmitter<string>;

  public empresa: Empresa;
  public sessionForm: FormGroup;

  constructor(
    private empSrv: EmpresasService,
    private userSrv: UsersService,
    private formBuilder: FormBuilder) {
      this.sendReload = new EventEmitter<string>();
  }

  ngOnInit(): void {
    this.sessionForm = this.formBuilder.group({
      usuario: ['', [Validators.required]],
      solario: ['', [Validators.required]],
      duracion: ['1', [Validators.required]],
      operario: ['', [Validators.required]],
    });

    this.empSrv.getDataEmpresa().subscribe(
      res => {
        this.empresa = res.datos;
        //console.log("Empresa cargada:" + JSON.stringify(this.empresa))
      }
    );
  }


  selectUser() {
    const event = this.userSrv.selectUser().subscribe(
      evtUser => {
        if (evtUser != undefined) {
          //console.log("UPDATE");
          this.user = evtUser;
        }
        event.unsubscribe();
      }
    );
  }


  saveNewSession() {
    const sesion = {
      energia: 100,
      duracion: this.sessionForm.get('duracion').value,
      solario: this.sessionForm.get('solario').value,
      pin: '1234',
      operario: this.sessionForm.get('operario').value,
      bono: undefined
    }
    const idusuario = this.user?._id;

    this.empSrv.registerSesion(idusuario, sesion).subscribe(
      res => {
        this.empSrv.notifyUpdate();
      },
      error => {
        alert("No se  a podido registrar la sesion\nError: "+ error);
      }
    );
  }
}
