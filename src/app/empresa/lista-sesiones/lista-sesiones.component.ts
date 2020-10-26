import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Session } from 'protractor';
import { Usuario } from 'src/app/models/usuario';
import { EmpresasService } from 'src/app/services/empresas.service';

@Component({
  selector: 'app-lista-sesiones',
  templateUrl: './lista-sesiones.component.html',
  styleUrls: ['./lista-sesiones.component.css']
})
export class ListaSesionesComponent implements OnInit {

  @Input() user: Usuario;

  public listaSesiones: Session[];

  constructor(private empSrv: EmpresasService) { }

  ngOnInit() {
    this.loadSesiones();
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
