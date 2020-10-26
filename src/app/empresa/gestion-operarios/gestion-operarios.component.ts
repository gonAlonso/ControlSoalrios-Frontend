import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Operario } from '../../models/operario';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmpresasService } from 'src/app/services/empresas.service';

@Component({
  selector: 'app-gestion-operarios',
  templateUrl: './gestion-operarios.component.html',
  styleUrls: ['./gestion-operarios.component.css']
})
export class GestionOperariosComponent implements OnInit {
  public form: FormGroup;
  private operario: Operario;

  @Input() inOperarios: Operario[];
  @Output() outReload = new EventEmitter<string>();

  constructor(private empSrv: EmpresasService,
              private authService: AuthService,
              private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.operario = new Operario();
    this.form = this.formBuilder.group({
      nombre: [this.operario.nombre, [Validators.required]],
      dni: [this.operario.dni, [Validators.required]],
      pin: [this.operario.pin, [Validators.required]],
    });
  }

  eliminar(ev, id) {
    ev.preventDefault();
    this.empSrv.deleteOperario(id).subscribe(
      result => {
        this.empSrv.notifyUpdate('delete-operario');
      },
      error => {
        alert("No se ha podido eliminar el operario");
      }
    );
  }

  guardarOperario(form: FormGroup) {
    if (!form.valid) {
      console.log("Guardar Operario invalid");
      alert("Datos de Operario incorrectos");
      return;
    }
    const newOperario = {
      nombre: form.get('nombre').value,
      dni: form.get('dni').value,
      pin: form.get('pin').value
    };

    this.empSrv.addOperario(newOperario as Operario).subscribe(
      data => {
        this.empSrv.notifyUpdate('add-operario');
      },
      err => {

      }
    );
  }

}
