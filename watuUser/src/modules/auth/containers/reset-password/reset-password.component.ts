import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'sb-signup',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecoverPasswordComponent implements OnInit {
    // recoverPasswordForm:FormGroup;
    // constructor(private fb:FormBuilder){
    //     this.recoverPasswordForm = this.fb.group({
    //         email:['',[Validators.required]],
    //     })
    // }
    // ngOnInit(): void {
    //     throw new Error('Method not implemented.');
    // }
    // recoverPassword(){}

}
