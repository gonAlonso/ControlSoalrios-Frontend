import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { EmpresasService } from '../../services/empresas.service';
import { Empresa } from '../../models/empresa';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-empresa',
  templateUrl: './edit-empresa.component.html',
  styleUrls: ['./edit-empresa.component.css']
})
export class EditEmpresaComponent implements OnInit {

  private cif: string;
  private observer: Observable<any>;
  public form: FormGroup;

  @Input() empresa: Empresa;
  @Output() outReloadEmpresa = new EventEmitter<string>();
  constructor(private empresaSrv: EmpresasService, public formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      cif: [this.empresa.cif, [Validators.required]],
      name: [this.empresa.nombre, [Validators.required]],
      fiscalname: [this.empresa.nombreFiscal, [Validators.required]],
      address: [this.empresa.direccion, [Validators.required]],
      telefone: [this.empresa.tlf, [Validators.required]],
      tipoBono: [this.empresa.tipoBono]
    });
  }

  reloadEmpresa() { this.outReloadEmpresa.emit('reloadEmpresa'); }


  updateEmpresa(form: FormGroup) {
    let newEmpresa = {
      cif: form.get('cif').value,
      nombre: form.get('name').value,
      nombreFiscal: form.get('fiscalname').value,
      direccion: form.get('address').value,
      tlf: form.get('telefone').value,
      tipoBono: form.get('tipoBono').value,
    };
    this.empresaSrv.updateEmpresa(newEmpresa as Empresa).subscribe(
      response => {
        alert("Datos guardados correctamente");
        this.reloadEmpresa();
      },
      error => {
        alert("Error al guardar los datos\n"+error.statusText);
      }
    );
  }

  eliminaEmpresa() {
    if (window.confirm("Seguro que desea eliminar la Empresa y deshabilitarla?") ) {
      /*this.empresaSrv.removeEmpresa( this.empresa._id).subscribe(
        response => {
          alert("Empresa eliminada");
          // Log Out and load home page
      },
      error => {
        alert("No se ha podido eliminar la empresa\n"+ error.statusText);
      });*/
    }
    return;
  }

}
