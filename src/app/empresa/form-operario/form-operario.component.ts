import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Operario } from 'src/app/models/operario';
import { AuthService } from 'src/app/services/auth.service';
import { EmpresasService } from 'src/app/services/empresas.service';

@Component({
  selector: 'app-form-operario',
  templateUrl: './form-operario.component.html',
  styleUrls: ['./form-operario.component.css']
})
export class FormOperarioComponent implements OnInit {

  public form: FormGroup
  @Input() operario: Operario

  constructor(private empSrv: EmpresasService,
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder)
  {
    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      dni: ['', [Validators.required]],
      pin: ['', [Validators.required]],
    });
  }

  ngOnInit() {}

  ngOnChanges() {
    if (!this.operario) return
    this.form.patchValue({
      nombre: this.operario.nombre,
      dni: this.operario.dni,
      pin: ''
    })
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
      err => { }
    );
  }
}
