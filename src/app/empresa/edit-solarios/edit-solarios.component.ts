import { Component, OnInit, Input } from '@angular/core';
import { Solario } from '../../models/solarios';

@Component({
  selector: 'app-edit-solarios',
  templateUrl: './edit-solarios.component.html',
  styleUrls: ['./edit-solarios.component.css']
})
export class EditSolariosComponent implements OnInit {

  @Input() listSolarios: Solario[];
  constructor() { }

  ngOnInit() {}

  deleteSolario(id: string){

  }

}
