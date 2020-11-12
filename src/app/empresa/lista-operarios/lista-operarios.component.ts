import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Operario } from 'src/app/models/operario';

@Component({
  selector: 'app-lista-operarios',
  templateUrl: './lista-operarios.component.html',
  styleUrls: ['./lista-operarios.component.css']
})
export class ListaOperariosComponent implements OnInit {

  @Input() operarios: Operario[];
  @Output() selected: EventEmitter<Operario>
  
  constructor() {
    this.selected = new EventEmitter<Operario>()
  }

  ngOnInit(): void { }

  select(evt, oper) {
    evt.preventDefault()
    this.selected.emit( oper )
  }

}
