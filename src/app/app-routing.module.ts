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
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HistoricoComponent } from './empresa/historico/historico.component';
import { ListaUsuariosComponent } from './empresa/lista-usuarios/lista-usuarios.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterEmpresaComponent},
  {path: 'admin-login', component: AdminLoginComponent },
  {path: 'admin-panel', component: AdminPanelComponent},
  {path: 'empresa', component: GestionEmpresaComponent, children:[
    {path: 'edit', component: EditEmpresaComponent, outlet: 'secondary'},
    {path: 'add-usuario', component: AddUsuarioComponent, outlet: 'secondary'},
    {path: 'usuarios', component: GestionUsuariosComponent, outlet: 'secondary'},
    {path: 'usuario/:id', component: GestionUsuarioEmpresaComponent, outlet: 'secondary'},
    {path: 'historico', component: HistoricoComponent, outlet: 'secondary'},
  ]},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
