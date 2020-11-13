import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EmpresasService } from 'src/app/services/empresas.service';
import { Solario } from 'src/app/models/solarios';
import { Empresa } from 'src/app/models/empresa';

@Component({
  selector: 'app-gestion-solarios',
  templateUrl: './gestion-solarios.component.html',
  styleUrls: ['./gestion-solarios.component.css']
})
export class GestionSolariosComponent implements OnInit {

  @Input() empresa: Empresa
  
  public solario: Solario
  
  constructor( ) { }

  ngOnInit() {
    this.solario = new Solario()
  }

  selectSolario( sol: Solario ) { this.solario = sol }

}
