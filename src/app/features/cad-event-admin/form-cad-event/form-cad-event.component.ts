import { Component, ViewEncapsulation } from '@angular/core';
import { InputWLabelComponent } from '../../../shared/input-wlabel/input-wlabel.component';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputOutputType } from '../../../core/types/InputOutput';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-form-cad-event',
  standalone: true,
  imports: [InputWLabelComponent, ReactiveFormsModule],
  templateUrl: './form-cad-event.component.html',
  styleUrl: './form-cad-event.component.css',
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class FormCadEventComponent {
  constructor(private formBuilder: FormBuilder) {}

  formEventRegister = this.formBuilder.group({
    name: ['', [Validators.required]],
    date: ['', [Validators.required]],
    time: ['', [Validators.required]],
    category: ['', [Validators.required]],
    local: ['', Validators.required],
    description: ['', Validators.required],
    image: ['', Validators.required],
  });

  onChangeValue(input: InputOutputType) {
    if (input.field === 'name') this.nome.setValue(input.value);
    if (input.field === 'date') this.date.setValue(input.value);
    if (input.field === 'time') this.time.setValue(input.value);
  }

  get nome() {
    return this.formEventRegister.get('name') as FormControl;
  }

  get date() {
    return this.formEventRegister.get('date') as FormControl;
  }

  get time() {
    return this.formEventRegister.get('time') as FormControl;
  }

  get category() {
    return this.formEventRegister.get('category') as FormControl;
  }

  get local() {
    return this.formEventRegister.get('local') as FormControl;
  }

  get description() {
    return this.formEventRegister.get('description') as FormControl;
  }

  onSubmitEventRegisterForm() {
    console.log(this.formEventRegister.value);
    //aqui vai ficar a logica para mandar o formulario quando tiver o service do mesmo
  }
}
