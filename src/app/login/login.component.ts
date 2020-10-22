import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  public form: FormGroup;

  constructor( public formBuilder: FormBuilder, public authSerrvice: AuthService, private router: Router) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit(formValue){
    this.authSerrvice.login( formValue.email, formValue.password ).subscribe(
      result => {
        let dir;
        switch (result.type) {
          case 'EMPRESA': dir = '/empresa'; break;
          case 'GESTOR':
          case 'USUARIO':
          default: throw new Error('Route not implemented');
        }
        this.router.navigateByUrl( dir );
      },
      error => {
        alert('Error al logearte\n' + error.statusText);
      });

  }

}
