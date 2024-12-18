import { Component, ViewEncapsulation } from '@angular/core';
import { InputWLabelComponent } from '../../../shared/input-wlabel/input-wlabel.component';

@Component({
  selector: 'app-form-cad-event',
  standalone: true,
  imports: [InputWLabelComponent],
  templateUrl: './form-cad-event.component.html',
  styleUrl: './form-cad-event.component.css',
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class FormCadEventComponent {}
