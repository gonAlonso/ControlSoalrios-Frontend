import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { EmpresasService } from 'src/app/services/empresas.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-form-bonos',
  templateUrl: './form-bonos.component.html',
  styleUrls: ['./form-bonos.component.css']
})
export class FormBonosComponent implements OnInit {

  public user: Usuario;

  constructor(
    private srvEmpresa: EmpresasService,
    private userSrv: UsersService) { }


  ngOnInit(): void {
    // Check tipo bono [minutos/sesiones]
    // Load user list
  }

  selectUser() {
    this.userSrv.selectUser().subscribe(
      evtUser => {
        if (evtUser != undefined) {
          this.user = evtUser;
        }
      }
    );
  }

  cancelSelect() {
    this.userSrv.cancelSelectUser();
  }

  guardarBono( value, date, type) {
    // Check inputs OK
    this.srvEmpresa.addBono( this.user._id, value, date, type).subscribe(
      arg => {
        // Load user profile
      },
      err => {
        alert("No se ha podido registrar el Bono\n"+err)
        console.log("Error al registrar el Bono")
      }
    );
  }

  selectedUser(event) {
    this.user = event;
    // Hide user list
  }
}
