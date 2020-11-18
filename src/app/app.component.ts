import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FrontEndGestionSolarios';

  public showLogin = false;
  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });

    this.route.fragment.subscribe((fragment: string) => {
      if( fragment == "login") this.showLogIn(null)
    })

    this.authService.getNotifications().subscribe(
      data => {
        if ( data == "hideLogin" ) this.showLogIn( null )
        if ( data == "login" ) this.hideLogIn( null )
        else if ( data == "logout" ) this.logout( null )
      }
    )

    $('#loginForm').on('hidden.bs.modal', (e) => {
      window.location.hash = ""
    })
  }

  logout(e) {
    e?.preventDefault();
    //this.authService.logout();
    this.showLogin = false;
    this.router.navigateByUrl( this.router.createUrlTree( ['/']));
  }

  showLogIn(evt) {
    evt?.preventDefault()
    this.showLogin = true;
    $('#loginForm').modal('show')
  }

  hideLogIn(evt) {
    evt?.preventDefault()
    this.showLogin = false;
    window.location.hash = ""
    this.form.reset()
    $('#loginForm').modal('hide')
  }
  
  toggleLogin() {
    this.showLogin = !this.showLogin;
  }

  sendLogin(evt){
    evt.preventDefault()
    
    this.authService.login( this.form.get('email').value, this.form.get('password').value ).subscribe(
      result => {
        let dir;
        switch (result.type) {
          case 'EMPRESA': dir = '/empresa'; break;
          case 'GESTOR':
          case 'USUARIO':
          default: throw new Error('Route not implemented');
        }
        this.hideLogIn( null )
        this.router.navigateByUrl( dir );
      },
      error => {
        alert('Error al logearte\n' + error.statusText);
      });
  }
}
