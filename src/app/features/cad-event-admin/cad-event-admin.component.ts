import { Component, ViewEncapsulation } from '@angular/core';
import { TitleComponent } from '../../shared/title/title.component';
import { FormCadEventComponent } from './form-cad-event/form-cad-event.component';

@Component({
  selector: 'app-cad-event-admin',
  standalone: true,
  imports: [TitleComponent, FormCadEventComponent],
  templateUrl: './cad-event-admin.component.html',
  styleUrl: './cad-event-admin.component.css',
  encapsulation: ViewEncapsulation.Emulated,
})
export class CadEventAdminComponent {}
