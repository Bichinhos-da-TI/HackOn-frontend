import { Component, ViewEncapsulation } from '@angular/core';
import { InputWLabelComponent } from '../../../shared/input-wlabel/input-wlabel.component';
import { WrapperShowpasswordComponent } from '../../../shared/input-wlabel/wrapper-showpassword/wrapper-showpassword.component';
import { InputOutputType } from '../../../core/types/InputOutput';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login-admin-form',
  standalone: true,
  imports: [
    InputWLabelComponent,
    WrapperShowpasswordComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './login-admin-form.component.html',
  styleUrl: './login-admin-form.component.css',
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class LoginAdminFormComponent {
  passwordType: 'password' | 'text' = 'password';
  constructor(private formBuilder: FormBuilder) {}

  formAdminLogin = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });
  get email() {
    return this.formAdminLogin.get('email') as FormControl;
  }

  get password() {
    return this.formAdminLogin.get('password') as FormControl;
  }

  onChangeValue(input: InputOutputType) {
    if (input.field === 'email') this.email.setValue(input.value);
    if (input.field === 'password') this.password.setValue(input.value);
  }

  changeViewPassword(value: boolean) {
    if (value === true) {
      this.passwordType = 'text';
    } else if (value === false) {
      this.passwordType = 'password';
    }
  }

  onSubmitLoginForm() {}
}
