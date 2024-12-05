import { Component } from '@angular/core';
import { CreateFormAdminComponent } from './components/create-form-admin/create-form-admin.component';
import { BackgroundComponent } from '../../shared/background/background.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { TitleComponent } from '../../shared/title/title.component';

@Component({
  selector: 'app-cad-admin-page',
  standalone: true,
  imports: [
    CreateFormAdminComponent,
    BackgroundComponent,
    HeaderComponent,
    TitleComponent,
  ],
  templateUrl: './cad-admin-page.component.html',
  styleUrl: './cad-admin-page.component.css',
})
export class CadAdminPageComponent {}
