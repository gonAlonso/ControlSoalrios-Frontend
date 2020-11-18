import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthService } from '../services/auth.service';
import { EmpresasService } from '../services/empresas.service';

@Component({
  selector: 'app-register-empresa',
  templateUrl: './register-empresa.component.html',
  styleUrls: ['./register-empresa.component.css']
})
export class RegisterEmpresaComponent implements OnInit {

  public form: FormGroup;
  public showOkMsg: boolean = false;
  public title: string

  constructor(
    private empresasSrv: EmpresasService,
    private formBuilder: FormBuilder)
  {
    this.title = environment.title
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      coname: ['', [Validators.required] ],
      fiscalname: ['', [Validators.required] ],
      postaddress: ['', [Validators.required] ],
      cif: ['', [Validators.required] ],
      bono: ['', [Validators.required] ],
      tlf: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }


  onSubmit(evt){
    evt.preventDefault();
    console.log("REGISTERING");

    const newEmpresa = {
      nombre: this.form.get('coname').value,
      cif: this.form.get('cif').value,
      tlf: this.form.get('tlf').value,
      nombreFiscal: this.form.get('fiscalname').value,
      direccion: this.form.get('postaddress').value,
      tipoBono: this.form.get('bono').value,
      email: this.form.get('email').value,
      password: this.form.get('password').value,
    }

    this.empresasSrv.registerEmpresa( newEmpresa as unknown ).subscribe(
      result => {
          this.showOkMsg = true;
      },
      error => {
        alert('Error al registrar la empresa\n' + error.error.mensaje);
      });

  }
}

