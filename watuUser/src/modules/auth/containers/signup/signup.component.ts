import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { AuthService } from '@modules/auth/services';

@Component({
  selector: 'sb-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignupComponent implements OnInit {

  signupForm:FormGroup;
  constructor(private fb:FormBuilder,private authService:AuthService) {
    this.signupForm = this.fb.group({
      names:['',[Validators.required]],
      firstLastName:['',[Validators.required]],
      secondLastName:['',[Validators.required]],
      email:['',[Validators.required]],
      password:['',[Validators.required]],
      repeatPassword:['',[Validators.required,this.passwordMatchValidator("password")]],
      nroCuenta:['',[Validators.required]]
    })
   }

  ngOnInit(): void {
  }

  signup(){

      console.log('xdd');
      
    const { names,firstLastName,secondLastName,email,
      password,repeatPassword,nroCuenta} = this.signupForm.value;


    const user = {
      nombre:names,
      apellido_paterno:firstLastName,
      apellido_materno:secondLastName,
      email,password,numero_cuenta:nroCuenta,
      roleId:"2"
    }
    this.authService.signup(user);

  }

  passwordMatchValidator(password: string): any{
    return (control: FormControl) => {
      console.log(control);
      if (!control || !control.parent) {
        return null;
      }
      return control.parent.get(password)?.value === control.value
        ? null
        : { mismatch: true } ;
    };
  }

}
