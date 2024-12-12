import { InputOutputType } from '../../../../core/types/InputOutput';
import { Component, ViewEncapsulation } from '@angular/core';
import { InputWLabelComponent } from '../../../../shared/input-wlabel/input-wlabel.component';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { WrapperShowpasswordComponent } from '../../../../shared/input-wlabel/wrapper-showpassword/wrapper-showpassword.component';

@Component({
  selector: 'app-create-form-admin',
  standalone: true,
  imports: [
    InputWLabelComponent,
    ReactiveFormsModule,
    WrapperShowpasswordComponent,
  ],
  templateUrl: './create-form-admin.component.html',
  styleUrl: './create-form-admin.component.css',
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class CreateFormAdminComponent {
  passwordType: 'password' | 'text' = 'password';
  confirmPasswordType: 'password' | 'text' = 'password';

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  formAdminRegister = this.formBuilder.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]],
  });

  onChangeValue(input: InputOutputType) {
    if (input.field === 'name') this.nome.setValue(input.value);
    if (input.field === 'email') this.email.setValue(input.value);
    if (input.field === 'password') this.password.setValue(input.value);
    if (input.field === 'confirmPassword')
      this.confirmPassword.setValue(input.value);
  }

  get nome() {
    return this.formAdminRegister.get('name') as FormControl;
  }

  get email() {
    return this.formAdminRegister.get('email') as FormControl;
  }

  get password() {
    return this.formAdminRegister.get('password') as FormControl;
  }

  get confirmPassword() {
    return this.formAdminRegister.get('confirmPassword') as FormControl;
  }

  onSubmitAdminRegisterForm() {
    this.router.navigateByUrl('/admin/confirmation');
    //aqui vai ficar a logica para mandar o formulario quando tiver o service do mesmo
  }

  changeViewPassword(value: boolean) {
    if (value === true) {
      this.passwordType = 'text';
    } else if (value === false) {
      this.passwordType = 'password';
    }
  }

  changeViewConfirmPassword(value: boolean) {
    if (value === true) {
      this.confirmPasswordType = 'text';
    } else if (value === false) {
      this.confirmPasswordType = 'password';
    }
  }
}
