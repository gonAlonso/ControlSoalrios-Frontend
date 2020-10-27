import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Empresa } from 'src/app/models/empresa';
import { Sesion } from 'src/app/models/sesion';
import { Solario } from 'src/app/models/solarios';
import { Usuario } from 'src/app/models/usuario';
import { EmpresasService } from 'src/app/services/empresas.service';

@Component({
  selector: 'app-lista-sesiones',
  templateUrl: './lista-sesiones.component.html',
  styleUrls: ['./lista-sesiones.component.css']
})
export class ListaSesionesComponent implements OnInit {

  @Input() user: Usuario;

  public listaSesiones: Sesion[];
  public empresa: Empresa;

  constructor(private empSrv: EmpresasService) {
    this.empSrv.getDataEmpresa().subscribe(
      resp => {
        this.empresa = resp.datos;
        //console.log("DATOS DE EMPRESA: " + JSON.stringify(this.empresa))
      }
    );
  }

  ngOnInit() {
    this.loadSesiones();
    this.empSrv.notification.subscribe(
      evt => {
        this.loadSesiones();
      }
    );
  }

  ngOnChanges() {
    this.loadSesiones();
  }

  loadSesiones() {
    if (this.user == undefined) return;

    this.empSrv.getSessionList(this.user._id).subscribe(
      (res: any)  => {
        this.listaSesiones = res.datos;
      }
    );
  }

}
