import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Operario } from '../../models/operario';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmpresasService } from 'src/app/services/empresas.service';
import { Empresa } from 'src/app/models/empresa';

@Component({
  selector: 'app-gestion-operarios',
  templateUrl: './gestion-operarios.component.html',
  styleUrls: ['./gestion-operarios.component.css']
})
export class GestionOperariosComponent implements OnInit {
  

  @Input() empresa: Empresa

  private operario: Operario;

  constructor() {
    this.operario = null
  }

  ngOnInit(): void {}
  
  selectOperario( oper ) {
    this.operario = oper
    console.log( "Selected Operario:", this.operario )
  }

}
