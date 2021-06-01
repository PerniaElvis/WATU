import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services';

@Component({
    selector: 'sb-login',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './login.component.html',
    styleUrls: ['login.component.scss'],
})
export class LoginComponent implements OnInit {
    loginForm = this.fb.group({
        email:['',[Validators.required]],
        password: ['', [Validators.required]],
    });

    constructor(private fb: FormBuilder, private authService: AuthService,private router:Router
        ) {}
    ngOnInit() {}

    onSubmit() {
        
        const {email,password} = this.loginForm.value;
        const user = {
            email,
            password
        }
        if(!this.loginForm.valid){
            return;
        }
        this.authService.login(user);
        // if (this.loginForm.status === 'VALID') {
        //     this.authService
        //         .login$({
        //             password: this.loginForm.value.password,
        //         })
                
        // }

        // // tslint:disable-next-line: forin
        // for (const key in this.loginForm.controls) {
        //     const control = this.loginForm.controls[key];
        //     control.markAllAsTouched();
        // }
    }

    /* Accessor Methods */

    get passwordControl() {
        return this.loginForm.get('password') as FormControl;
    }

    get passwordControlValid() {
        return this.passwordControl.touched && !this.passwordControlInvalid;
    }

    get passwordControlInvalid() {
        return (
            this.passwordControl.touched &&
            (this.passwordControl.hasError('required') ||
                this.passwordControl.hasError('minlength'))
        );
    }
toSignup(){
    this.router.navigate(['auth/signup'])
}
toRecoveryPassword(){
    this.router.navigate(['auth/recover-password'])
}
}
