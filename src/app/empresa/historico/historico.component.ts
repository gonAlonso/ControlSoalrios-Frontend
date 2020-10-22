import { Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/models/empresa';
import { EmpresasService } from 'src/app/services/empresas.service';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent implements OnInit {

  empresa : Empresa;
  constructor(private empSrv: EmpresasService) { }

  ngOnInit() {
    this.empSrv.getDataEmpresa().subscribe(
      res => { this.empresa = res.datos; }
    );
  }

}
