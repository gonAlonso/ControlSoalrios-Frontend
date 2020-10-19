import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { GestionEmpresaComponent } from './empresa/gestion-empresa/gestion-empresa.component';
import { LoginComponent } from './login/login.component';
import { EditEmpresaComponent } from './empresa/edit-empresa/edit-empresa.component';
import { GestionUsuariosComponent } from './empresa/gestion-usuarios/gestion-usuarios.component';
import { GestionUsuarioEmpresaComponent } from './empresa/gestion-usuario-empresa/gestion-usuario-empresa.component';
import { AddUsuarioComponent } from './empresa/add-usuario/add-usuario.component';
import { RegisterEmpresaComponent } from './register-empresa/register-empresa.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterEmpresaComponent},
  {path: 'admin-login', component: AdminLoginComponent },
  {path: 'admin-panel', component: AdminPanelComponent},
  {path: 'empresa', component: GestionEmpresaComponent},
  {path: 'empresa/edit', component: EditEmpresaComponent},
  {path: 'empresa/usuarios', component: GestionUsuariosComponent},
  {path: 'empresa/add-usuario', component: AddUsuarioComponent},
  {path: 'empresa/usuario/:id', component: GestionUsuarioEmpresaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
