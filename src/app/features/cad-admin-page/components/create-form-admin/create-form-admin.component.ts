import { Component } from '@angular/core';
import { InputWLabelComponent } from '../../../../shared/input-wlabel/input-wlabel.component';

@Component({
  selector: 'app-create-form-admin',
  standalone: true,
  imports: [InputWLabelComponent],
  templateUrl: './create-form-admin.component.html',
  styleUrl: './create-form-admin.component.css',
})
export class CreateFormAdminComponent {}
