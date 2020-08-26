import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  public form: FormGroup;

  constructor( public formBuilder: FormBuilder, public authSerrvice: AuthService, private router: Router) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit(formValue){
    //alert("Se ha enviado el formulario correctamente: "+ formValue.email+' '+ formValue.password )
    console.log( 'Inicio de sesion');
    this.authSerrvice.adminlogin( formValue.email, formValue.password ).subscribe(
      result => {
        if (result.type !== 'ADMINISTRADOR') {
          // Show login error
          throw new Error('User type not valid');
        }
        this.router.navigateByUrl(
          this.router.createUrlTree( ['admin-panel'])); //TODO: Redirect to admin panel
      },
      error => {
        alert('Error al logearte');
        console.log( 'ERROR:');
        console.log( error );
      });

  }

}
