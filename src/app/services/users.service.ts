import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';
import { EmpresasService } from './empresas.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private selectedUser: Observable<Usuario>;
  private notifyList: EventEmitter<string>;

  constructor() {
    this.selectedUser = undefined;
    this.notifyList = new EventEmitter<string>();
  }

  selectUser(): Observable<Usuario> {
    this.notifyList.emit( "show" );
    return this.selectedUser;
  }

  cancelSelectUser(): void {
    this.notifyList.emit( "hide" );
  }

  registerListWidget( link: Observable<Usuario>) {
    this.selectedUser = link;
  }

  getShowListEmitter(): Observable<any> {
    return this.notifyList;
  }

  reloadUsers() {
    this.notifyList.emit( "reload" );
  }

}
