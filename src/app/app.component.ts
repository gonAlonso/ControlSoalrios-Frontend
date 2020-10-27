import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FrontEndGestionSolarios';

  navbarOpen = false;

  constructor(public authService: AuthService, private router: Router) {}

  logout(e) {
    e.preventDefault();
    this.authService.logout();
    this.navbarOpen = false;
    this.router.navigateByUrl( this.router.createUrlTree( ['/login']));
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
