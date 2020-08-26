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
import { EditSolariosComponent } from './empresa/edit-solarios/edit-solarios.component';
import { AdminEmpresaComponent } from './admin/admin-empresa/admin-empresa.component';
import { LoginComponent } from './login/login.component';
import { GestionOperariosComponent } from './empresa/gestion-operarios/gestion-operarios.component';

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
    EditSolariosComponent,
    AdminEmpresaComponent,
    LoginComponent,
    GestionOperariosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
