import { Component, OnInit } from '@angular/core';
import { EmpresasService } from '../../services/empresas.service';
import { Empresa } from '../../models/empresa';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-edit-empresa',
  templateUrl: './edit-empresa.component.html',
  styleUrls: ['./edit-empresa.component.css']
})
export class EditEmpresaComponent implements OnInit {

  public empresa: Empresa;
  public editForm: FormGroup;

  //@Input() empresa: Empresa;
  //@Output() outReload = new EventEmitter<string>();

  constructor(
    private authSrv: AuthService,
    private empresaSrv: EmpresasService,
    private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.reloadEmpresa();

    this.empresaSrv.notification.subscribe( evt => { this.reloadEmpresa() })
  }

  reloadEmpresa() {
    this.empresaSrv.getDataEmpresa().subscribe(
      res => {
        this.empresa = res.datos
      },
      error => {
        console.log("No se puede cargar los datos de la empresa\n"+  error.statusText)
        this.authSrv.logout();
      }
    );
  }

  eliminaEmpresa() {
    if (window.confirm("Seguro que desea eliminar la Empresa y deshabilitarla?") ) {
      /*this.empresaSrv.removeEmpresa( this.empresa._id).subscribe(
        response => {
          alert("Empresa eliminada");
          // Log Out and load home page
      },
      error => {
        alert("No se ha podido eliminar la empresa\n"+ error.statusText);
      });*/
    }
    return;
  }

}
