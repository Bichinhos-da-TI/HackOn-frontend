import { Component } from '@angular/core';
import { CreateFormAdminComponent } from './components/create-form-admin/create-form-admin.component';

@Component({
  selector: 'app-cad-admin-page',
  standalone: true,
  imports: [CreateFormAdminComponent],
  templateUrl: './cad-admin-page.component.html',
  styleUrl: './cad-admin-page.component.css',
})
export class CadAdminPageComponent {}
