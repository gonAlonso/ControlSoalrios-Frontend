import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  public form: FormGroup;

  constructor( public formBuilder: FormBuilder, public authSerrvice: AuthService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit(formValue){
    //alert("Se ha enviado el formulario correctamente: "+ formValue.email+' '+ formValue.password )
    console.log( "Inicio de sesion")
    this.authSerrvice.login( formValue.email, formValue.password ).subscribe(
      result => {
        const datos = JSON.stringify({email: formValue.email, token: result});
        localStorage.setItem('currentUser', datos);
        // Show login OK
        // Load panel
      },
      error => {
        alert('Error al logearte');
        console.log( 'ERROR:');
        console.log( error );
      });

  }

}
