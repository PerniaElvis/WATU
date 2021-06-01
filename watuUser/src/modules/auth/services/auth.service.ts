import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from '@common/services';
import { User } from '@modules/auth/models';
import { LoginPayload, TokenResponse } from '@start-bootstrap/sb-clean-blog-shared-types';

import { from, Observable, of, throwError } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';

import { AuthUtilsService } from './auth-utils.service';
import {environment} from '../../../environments/environment';
import { SessionStore } from '../session-store/session.store';

export interface UserPayload{
    nombre:string,
    apellido_paterno:string,
    apellido_materno:string,
    email:string,
    password:string,
    repeatPassword?:string,
    numero_cuenta:string,
    roleId:string

}

export interface LoginUserPayload{
    email:string,
    password:string
}
@Injectable()
export class AuthService {
    constructor(
        private http: HttpClient,
        private configService: ConfigService,
        private authUtilsService: AuthUtilsService,
        private router: Router,
        private sessionStore:SessionStore
    ) {}

    login(loginPayload: LoginUserPayload){
        return this.http
            .post(
                `${environment.backendWatu}/iniciar-sesion`,
                loginPayload
            )
            .pipe(
                tap((val:any)=>{
                    localStorage.setItem('token',val.token)
                    this.router.navigate(['']);
                    this.sessionStore.update((state)=>{
                        return{
                            isLoadUserDone:true,
                            loggedUserId:val.token
                        }
                    })
                }),
                catchError((error: Error) => throwError(error))
            ).subscribe();
    }

    signup(userPayload:UserPayload){
        return this.http
        .post(
            `${environment.backendWatu}/crear-cuenta`,
            userPayload
        )
        .pipe(
            tap((val:any )=> {
                if(val.errorsSequelize){
                    if(val.errorsSequelize.length>0){
                        console.log(val);
                        alert('correo en uso');
                        return;
                    }
                   
                }
                this.router.navigate(['/auth/login']);
            }),
            catchError((err)=>{
                alert(err)
                return  throwError(err);
            })
        ).subscribe();
    }
}
