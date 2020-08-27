import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Empresa } from 'src/app/models/empresa';

@Component({
  selector: 'app-gestion-usuarios',
  templateUrl: './gestion-usuarios.component.html',
  styleUrls: ['./gestion-usuarios.component.css']
})
export class GestionUsuariosComponent implements OnInit {

  @Input() inEmpresa: Empresa;
  @Output() outReload = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

}
