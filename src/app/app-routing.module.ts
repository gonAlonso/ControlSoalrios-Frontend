import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { GestionEmpresaComponent } from './empresa/gestion-empresa/gestion-empresa.component';
import { GestionUsuarioComponent } from './gestion-usuario/gestion-usuario.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent },
  {path: 'admin-login', component: AdminLoginComponent },
  {path: 'admin-panel', component: AdminPanelComponent},
  {path: 'gestion-empresa', component: GestionEmpresaComponent},
  {path: 'gestion-usuario', component: GestionUsuarioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
