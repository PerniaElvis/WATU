import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginApi } from './login.api';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private loginApi: LoginApi, private router: Router) {}

  login() {
    this.loginApi.login();
    const email="useradmin@admin.com";
    const ontraseña="123456";
    this.router.navigate(['']);
  }
}
