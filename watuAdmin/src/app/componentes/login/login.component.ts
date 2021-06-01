import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { AlertService } from '../../shared/services/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email="";
  password="";

  loginForm: FormGroup;
  emailPattern =
    '^([0-9a-zA-Z]([-.w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-w]*[0-9a-zA-Z].)+[a-zA-Z]{2,3})$';

  constructor(private router:Router,private fb: FormBuilder, private loginService: LoginService,private alertService  : AlertService ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      password: ['', [Validators.required]],
      rol: 'admin',
    });
  }

  toSignup() {}
  ngOnInit(): void {
    localStorage.clear();
  }

  login() {
    console.log(this.email);
    console.log(this.password);
    if(this.email=="useradmin@admin.com" ){
      this.alertService.success("Ok",'Datos Correctos');
      this.router.navigate(['/agencias']);
    }else{
      this.alertService.error("Datos incorrectos",'ok');
      
    }
  }
}
