import { InputOutputType } from './../../../../types/InputOutput';
import { Component, ViewEncapsulation } from '@angular/core';
import { InputWLabelComponent } from '../../../../shared/input-wlabel/input-wlabel.component';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-form-admin',
  standalone: true,
  imports: [InputWLabelComponent, ReactiveFormsModule],
  templateUrl: './create-form-admin.component.html',
  styleUrl: './create-form-admin.component.css',
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class CreateFormAdminComponent {
  name = '';
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

  changeViewPassword() {
    if (this.passwordType === 'password') {
      this.passwordType = 'text';
    } else if (this.passwordType === 'text') {
      this.passwordType = 'password';
    }
  }

  changeViewConfirmPassword() {
    if (this.confirmPasswordType === 'password') {
      this.confirmPasswordType = 'text';
    } else if (this.confirmPasswordType === 'text') {
      this.confirmPasswordType = 'password';
    }
  }
}
