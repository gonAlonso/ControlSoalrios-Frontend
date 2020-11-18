import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { GestionEmpresaComponent } from './empresa/gestion-empresa/gestion-empresa.component';
import { EditEmpresaComponent } from './empresa/edit-empresa/edit-empresa.component';
import { GestionUsuariosComponent } from './empresa/gestion-usuarios/gestion-usuarios.component';
import { GestionUsuarioEmpresaComponent } from './empresa/gestion-usuario-empresa/gestion-usuario-empresa.component';
import { AddUsuarioComponent } from './empresa/add-usuario/add-usuario.component';
import { RegisterEmpresaComponent } from './register-empresa/register-empresa.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HistoricoComponent } from './empresa/historico/historico.component';
import { FormBonosComponent } from './empresa/form-bonos/form-bonos.component';
import { GestionSesionesComponent } from './empresa/gestion-sesiones/gestion-sesiones.component';
import { VerifyComponent } from './verify/verify.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HomepageEmpresaComponent } from './empresa/homepage/homepage.component';


const routes: Routes = [
  //{path: 'login', component: LoginComponent },
  {path: 'verify/:token', component: VerifyComponent },
  {path: 'register', component: RegisterEmpresaComponent},
  {path: 'admin-login', component: AdminLoginComponent },
  {path: 'admin-panel', component: AdminPanelComponent},
  {path: 'empresa', component: GestionEmpresaComponent, children:[
    {path: 'edit', component: EditEmpresaComponent, outlet: 'secondary'},
    {path: 'add-usuario', component: AddUsuarioComponent, outlet: 'secondary'},
    {path: 'usuarios', component: GestionUsuariosComponent, outlet: 'secondary'},
    {path: 'usuario/:id', component: GestionUsuarioEmpresaComponent, outlet: 'secondary',  pathMatch: 'full'},
    {path: 'add-bono', component: FormBonosComponent, outlet: 'secondary'},
    {path: 'add-sesion', component: GestionSesionesComponent, outlet: 'secondary'},
    {path: 'historico', component: HistoricoComponent, outlet: 'secondary'},
    {path: '', component: HomepageEmpresaComponent, outlet: 'secondary'},
  ]},
  {path: '', component: HomepageComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
