import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css']
})
export class FormUsuarioComponent implements OnInit {

  @Input() selectedUser: Usuario;
  @Output() usuario: EventEmitter<Usuario> = new EventEmitter();

  public userForm: FormGroup;

  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {}
  ngOnChanges(): void{
    this.userForm = new FormGroup({});
    this.userForm = this.formBuilder.group({
      nombre: [this.selectedUser==undefined? "" :this.selectedUser.nombre, [Validators.required]],
      dni: [this.selectedUser==undefined? "" :this.selectedUser.dni, [Validators.required]],
      email: [this.selectedUser==undefined? "" :this.selectedUser.email, [Validators.required]],
      fototipo: [this.selectedUser==undefined? '' :this.selectedUser.fototipo, [Validators.required]],
      tlf: [this.selectedUser==undefined? "" :this.selectedUser.tlf , [Validators.required]],
    });
  }

  guardarUsuario(form: FormGroup) {
    if (this.userForm.invalid) {
      console.log("Guardar Usuario invalid form data");
      alert("Datos de Usuario incorrectos");
      return;
    }
    const newUsuario = {
      nombre: form.get('nombre').value,
      dni: form.get('dni').value,
      email:  form.get('email').value,
      fototipo:  form.get('fototipo').value,
      tlf:  form.get('tlf').value.toString(),
    };
    console.log("ENVIAR");
    this.usuario.emit( newUsuario as Usuario );
  }

}
