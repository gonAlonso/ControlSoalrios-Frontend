import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthService } from '../../services/auth.service';
import { AdminService } from '../../services/admin.service';
import { Empresa } from 'src/app/models/empresa';

@Component({
  selector: 'app-buscar-empresa',
  templateUrl: './buscar-empresa.component.html',
  styleUrls: ['./buscar-empresa.component.css']
})
export class BuscarEmpresaComponent implements OnInit {

  public listEmpresas: Empresa[];

  constructor(private admSrv: AdminService, private authSerrvice: AuthService) {}

  ngOnInit() {
    this.loadEmpresas();
  }

  loadEmpresas() {
      this.admSrv.getAllEmpresas().subscribe(
        result => {
          this.listEmpresas = result.datos;
        },
        error => {
          //TODO: Show error message
          this.listEmpresas = null;
        }

      );
  }

  getEmpresa(text) {

  }
}
