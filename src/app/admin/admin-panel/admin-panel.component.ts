import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() {
    const user = this.authService.getUser();
    console.log( user );
    if (!user || (user.type !== 'ADMINISTRADOR')) {
      console.log('Error de tipo de usuario');
      this.logout();
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl( this.router.createUrlTree( ['admin-login']));
  }

}
