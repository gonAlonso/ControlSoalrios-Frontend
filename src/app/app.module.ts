/* https://angular.io/guide/router */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { BuscarEmpresaComponent } from './admin/buscar-empresa/buscar-empresa.component';
import { ListaEmpresasComponent } from './admin/lista-empresas/lista-empresas.component';
import { GestionEmpresaComponent } from './empresa/gestion-empresa/gestion-empresa.component';
import { GestionUsuarioComponent } from './gestion-usuario/gestion-usuario.component';
import { EditEmpresaComponent } from './empresa/edit-empresa/edit-empresa.component';
import { AdminEmpresaComponent } from './admin/admin-empresa/admin-empresa.component';
import { LoginComponent } from './login/login.component';
import { GestionOperariosComponent } from './empresa/gestion-operarios/gestion-operarios.component';
import { GestionSolariosComponent } from './empresa/gestion-solarios/gestion-solarios.component';
import { GestionUsuariosComponent } from './empresa/gestion-usuarios/gestion-usuarios.component';
import { ListaUsuariosComponent } from './empresa/lista-usuarios/lista-usuarios.component';
import { AddUsuarioComponent } from './empresa/add-usuario/add-usuario.component';
import { GestionUsuarioEmpresaComponent } from './empresa/gestion-usuario-empresa/gestion-usuario-empresa.component';
import { RegisterEmpresaComponent } from './register-empresa/register-empresa.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HistoricoComponent } from './empresa/historico/historico.component';
import { FormUsuarioComponent } from './empresa/form-usuario/form-usuario.component';
import { FormBonosComponent } from './empresa/form-bonos/form-bonos.component';
import { FormSesionComponent } from './empresa/form-sesion/form-sesion.component';
import { ListaBonosComponent } from './empresa/lista-bonos/lista-bonos.component';
import { ListaSesionesComponent } from './empresa/lista-sesiones/lista-sesiones.component';
import { GestionSesionesComponent } from './empresa/gestion-sesiones/gestion-sesiones.component';
import { GetSolarioNamePipe } from './services/get_solario_name.pipe';
import { GetOperarioNamePipe } from './services/get_operario_name.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomepageComponent } from './homepage/homepage.component';
import { VerifyComponent } from './verify/verify.component';
import { FormDatosEmpresaComponent } from './empresa/form-datos-empresa/form-datos-empresa.component';
import { FormSolarioComponent } from './empresa/form-solario/form-solario.component';
import { ListaSolariosComponent } from './empresa/lista-solarios/lista-solarios.component';
import { ListaOperariosComponent } from './empresa/lista-operarios/lista-operarios.component';
import { FormOperarioComponent } from './empresa/form-operario/form-operario.component';
import { HomepageEmpresaComponent } from './empresa/homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AdminPanelComponent,
    BuscarEmpresaComponent,
    ListaEmpresasComponent,
    GestionEmpresaComponent,
    GestionUsuarioComponent,
    EditEmpresaComponent,
    AdminEmpresaComponent,
    LoginComponent,
    GestionOperariosComponent,
    GestionSolariosComponent,
    GestionUsuariosComponent,
    ListaUsuariosComponent,
    AddUsuarioComponent,
    GestionUsuarioEmpresaComponent,
    RegisterEmpresaComponent,
    PageNotFoundComponent,
    HistoricoComponent,
    FormUsuarioComponent,
    FormBonosComponent,
    FormSesionComponent,
    ListaBonosComponent,
    ListaSesionesComponent,
    GestionSesionesComponent,
    GetSolarioNamePipe,
    GetOperarioNamePipe,
    HomepageComponent,
    VerifyComponent,
    FormDatosEmpresaComponent,
    FormSolarioComponent,
    ListaSolariosComponent,
    ListaOperariosComponent,
    FormOperarioComponent,
    HomepageEmpresaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
