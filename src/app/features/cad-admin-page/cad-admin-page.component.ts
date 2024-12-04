import { Component } from '@angular/core';
import { CreateFormAdminComponent } from './components/create-form-admin/create-form-admin.component';
import { BackgroundComponent } from '../../shared/background/background.component';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-cad-admin-page',
  standalone: true,
  imports: [CreateFormAdminComponent, BackgroundComponent, HeaderComponent],
  templateUrl: './cad-admin-page.component.html',
  styleUrl: './cad-admin-page.component.css',
})
export class CadAdminPageComponent {}
