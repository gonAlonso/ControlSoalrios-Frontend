import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Solario } from 'src/app/models/solarios';
import { EmpresasService } from 'src/app/services/empresas.service';

@Component({
  selector: 'app-form-solario',
  templateUrl: './form-solario.component.html',
  styleUrls: ['./form-solario.component.css']
})
export class FormSolarioComponent implements OnInit {

  public form: FormGroup;

  @Input() solario: Solario

  constructor(
    private empSrv: EmpresasService,
    private formBuilder: FormBuilder) {
      this.form = this.formBuilder.group({
        nombre: ['', [Validators.required]],
        potencia: ['', [Validators.required]],
        proximaRevision: ['', [Validators.required]],
      });
    }

  ngOnInit(): void { }

  ngOnChanges() {
    this.form.patchValue({
      nombre: this.solario.nombre,
      potencia: this.solario.potencia,
      proximaRevision: this.solario.proximaRevision
    })
  }



  eliminar(ev, id) {
    ev.preventDefault();
    this.empSrv.deleteSolario(id).subscribe(
      result => {
        this.empSrv.notifyUpdate('delete-solario');
      },
      error => {
        alert("No se ha podido eliminar el solario");
      }
    );
  }

  guardarSolario() {
    if ( this.form.invalid ) {
      console.log("Guardar Solario invalid");
      alert("Datos de Solario incorrectos");
      return;
    }
    const newSolario = {
      nombre: this.form.get('nombre').value,
      potencia: this.form.get('potencia').value,
      proximaRevision: this.form.get('proximaRevision').value,
    };

    this.empSrv.addSolario(newSolario as Solario).subscribe(
      data => {
        this.empSrv.notifyUpdate('add-solario');
      },
      err => {
        alert("Fallo al añadir el solario: " + err.responseText);
      }
    );
  }
}
