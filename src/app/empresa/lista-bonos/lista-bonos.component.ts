import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-lista-bonos',
  templateUrl: './lista-bonos.component.html',
  styleUrls: ['./lista-bonos.component.css']
})
export class ListaBonosComponent implements OnInit {

  @Input() user: Usuario;

  constructor() { }

  ngOnInit(): void {}

}
