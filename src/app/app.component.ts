import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { AuthProviders, FirebaseAuth, FirebaseAuthState } from 'angularfire2';

import { ApiService } from './shared';
import { HomeComponent } from './home';
import { Explore } from './explore';
import { AboutComponent } from './about';
import { LoginComponent } from './login';
import { SignUpComponent } from './sign_up';

import '../style/app.scss';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'my-app', // <my-app></my-app>
  providers: [ApiService],
  directives: [...ROUTER_DIRECTIVES],
  template: require('./app.component.html'),
  styles: [require('./app.component.scss')],
})
@RouteConfig([
  {path: '/', component: HomeComponent, name: 'Home'},
  {path: '/About', component: AboutComponent, name: 'About'},
  {path: '/login', component: LoginComponent, name: 'Login'},
  {path: '/signUp', component: SignUpComponent, name: 'SignUp'},
  {path: '/Explore/:q', component: Explore, name: 'Explore'}
])
export class AppComponent {
  private authState: FirebaseAuthData|FirebaseAuthState;

  constructor(private api: ApiService, public auth$: FirebaseAuth) {
    this.authState = auth$.getAuth();

    auth$.subscribe((state: FirebaseAuthState) => {
      this.authState = state;
    });
  }
  get_authenticated(){
    return this.authState !== null;
  }
}
