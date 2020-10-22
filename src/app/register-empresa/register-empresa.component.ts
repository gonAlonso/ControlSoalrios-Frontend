import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Empresa } from '../models/empresa';
import { AuthService } from '../services/auth.service';
import { EmpresasService } from '../services/empresas.service';

@Component({
  selector: 'app-register-empresa',
  templateUrl: './register-empresa.component.html',
  styleUrls: ['./register-empresa.component.css']
})
export class RegisterEmpresaComponent implements OnInit {

  public form: FormGroup;

  constructor(private empresasSrv: EmpresasService,
              private router: Router,
              private authSerrvice: AuthService,
              private formBuilder: FormBuilder) { }

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
        this.authSerrvice.login( newEmpresa.email, newEmpresa.password ).subscribe(
          ok => {
            this.router.navigateByUrl( this.router.createUrlTree( ["/empresa"]));
          },
          err => {
            alert('Error al registrar la empresa\n' + err.error.mensaje);
          }
        )
      },
      error => {
        alert('Error al registrar la empresa\n' + error.error.mensaje);
      });

  }
}
