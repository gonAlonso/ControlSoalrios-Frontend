import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';
import { EmpresasService } from './empresas.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private selectedUser: Observable<Usuario>;
  private showList: EventEmitter<boolean>;

  constructor() {
    this.selectedUser = undefined;
    this.showList = new EventEmitter<boolean>();
  }

  selectUser(): Observable<Usuario> {
    this.showList.emit( true );
    return this.selectedUser;
  }

  cancelSelectUser(): void {
    this.showList.emit( false );
  }

  registerListWidget( link: Observable<Usuario>) {
    this.selectedUser = link;
  }

  getShowListEmitter(): Observable<any> {
    return this.showList;
  }


}
