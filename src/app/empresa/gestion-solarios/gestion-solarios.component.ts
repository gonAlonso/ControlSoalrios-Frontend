import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmpresasService } from 'src/app/services/empresas.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Solario } from 'src/app/models/solarios';

@Component({
  selector: 'app-gestion-solarios',
  templateUrl: './gestion-solarios.component.html',
  styleUrls: ['./gestion-solarios.component.css']
})
export class GestionSolariosComponent implements OnInit {

  public form: FormGroup;
  private solario: Solario;
  @Input() inSolarios: Solario[];
  @Output() outReload = new EventEmitter<string>();
  constructor(private empSrv: EmpresasService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.solario = new Solario();
    this.form = this.formBuilder.group({
      nombre: [this.solario.nombre, [Validators.required]],
      potencia: [this.solario.potencia, [Validators.required]],
      proximaRevision: [this.solario.proximaRevision, [Validators.required]],
    });
  }

  eliminar(ev, id) {
    ev.preventDefault();
    this.empSrv.deleteSolario(id).subscribe(
      result => {
        this.outReload.emit('reload');
      },
      error => {
        alert("No se ha podido eliminar el solario");
      }
    );
  }

  guardarSolario(form: FormGroup) {
    if (!form.valid) {
      console.log("Guardar Solario invalid");
      alert("Datos de Solario incorrectos");
      return;
    }
    const newOperario = {
      nombre: form.get('nombre').value,
      potencia: form.get('potencia').value,
      proximaRevision: form.get('proximaRevision').value,
    };

    this.empSrv.addSolario(newOperario as Solario).subscribe(
      data => {
        this.outReload.emit('reload');
      },
      err => {
        alert("Fallo al añadir el solario: " + err.responseText);
      }
    );
  }
}
