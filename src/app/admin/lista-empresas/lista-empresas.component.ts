import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { Empresa } from '../../models/empresa';
import { AdminService } from '../../services/admin.service';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-lista-empresas',
  templateUrl: './lista-empresas.component.html',
  styleUrls: ['./lista-empresas.component.css']
})
export class ListaEmpresasComponent implements OnInit {

  public listEmpresas: Empresa[];
  public empresasMostrar: Empresa[];

  @Output() notifySelect = new EventEmitter<string>();

  constructor(private admSrv: AdminService, private authSerrvice: AuthService) {
    this.empresasMostrar = [];
  }

  ngOnInit() {
    this.loadEmpresas();
  }

  loadEmpresas() {
      this.admSrv.getAllEmpresas().subscribe(
        result => {
          this.listEmpresas = result.datos;
          this.updateSearch(null);
        },
        error => {
          //TODO: Show error message
          this.listEmpresas = null;
        }
      );
  }

  sendCif(cif) { this.notifySelect.emit(cif); }

  updateSearch(text: string) {

    if (text == null || text == undefined || text == '') {
      this.empresasMostrar = this.listEmpresas;
      return;
    }
    this.empresasMostrar = [];
    this.listEmpresas.forEach( item => {
      if (item.cif.toLowerCase().includes(text.toLowerCase()) ) { this.empresasMostrar.push(item); }
      if (item.nombre.toLowerCase().includes(text.toLowerCase()) ) { this.empresasMostrar.push(item); }
      if (item.nombreFiscal.toLowerCase().includes(text.toLowerCase()) ) { this.empresasMostrar.push(item); }
    });
  }

}
