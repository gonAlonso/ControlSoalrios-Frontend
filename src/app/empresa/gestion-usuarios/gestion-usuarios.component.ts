import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Empresa } from 'src/app/models/empresa';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-gestion-usuarios',
  templateUrl: './gestion-usuarios.component.html',
  styleUrls: ['./gestion-usuarios.component.css']
})
export class GestionUsuariosComponent implements OnInit {

  @Input() inEmpresa: Empresa;
  @Output() outReload = new EventEmitter<string>();

  constructor(
    private usrSrv: UsersService,
    private router: Router) { }

  ngOnInit() {
    const event = this.usrSrv.selectUser().subscribe(
      user => {
        this.router.navigate( ['empresa', {outlets: {secondary: ['usuario', user._id]}}]);
        event.unsubscribe();
      }
    )
  }
  ngOnDestroy() {
    this.usrSrv.cancelSelectUser();
  }

}
