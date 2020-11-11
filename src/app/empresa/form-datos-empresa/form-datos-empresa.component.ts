import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Empresa } from 'src/app/models/empresa';
import { EmpresasService } from 'src/app/services/empresas.service';

@Component({
  selector: 'app-form-datos-empresa',
  templateUrl: './form-datos-empresa.component.html',
  styleUrls: ['./form-datos-empresa.component.css']
})
export class FormDatosEmpresaComponent implements OnInit {

  @Input() empresa: Empresa

  public form: FormGroup
  
  constructor(
    private empresaSrv: EmpresasService,
    private formBuilder: FormBuilder)
  {
    this.form = this.formBuilder.group({
      cif: ['', [Validators.required]],
      name: ['', [Validators.required]],
      fiscalname: ['', [Validators.required]],
      address: ['', [Validators.required]],
      telefone: ['', [Validators.required]],
      tipoBono: ['',[Validators.required]],
    })
  }

  ngOnInit(): void {}


  updateEmpresa() {
    // let newEmpresa = {
    //   cif: this.form.get('cif').value,
    //   nombre: this.form.get('name').value,
    //   nombreFiscal: this.form.get('fiscalname').value,
    //   direccion: this.form.get('address').value,
    //   tlf: this.form.get('telefone').value,
    //   tipoBono: this.form.get('tipoBono').value,
    // }
  }

  ngOnChanges() {
    if ( !this.empresa ) return
    this.form.patchValue({
      cif: this.empresa.cif, 
      name: this.empresa.nombre,
      fiscalname: this.empresa.nombreFiscal,
      address: this.empresa.direccion,
      telefone: this.empresa.tlf,
      tipoBono: this.empresa.tipoBono
    })
  }

}
