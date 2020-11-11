import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Solario } from 'src/app/models/solarios';

@Component({
  selector: 'app-lista-solarios',
  templateUrl: './lista-solarios.component.html',
  styleUrls: ['./lista-solarios.component.css']
})
export class ListaSolariosComponent implements OnInit {


  @Input() listaSolarios: Solario[];
  @Output() selectEvent: EventEmitter<Solario>
  
  constructor() {
    this.selectEvent = new EventEmitter<Solario>()
  }

  ngOnInit(): void {}

  selectSolario( evt, solario ) {
    evt.preventDefault()
    this.selectEvent.emit( solario )
  }


}
