import { Component, ViewEncapsulation } from '@angular/core';
import { BackgroundComponent } from '../../shared/background/background.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { LoginAdminFormComponent } from './login-admin-form/login-admin-form.component';
import { TitleComponent } from '../../shared/title/title.component';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [
    BackgroundComponent,
    HeaderComponent,
    LoginAdminFormComponent,
    TitleComponent,
  ],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css',
})
export class AdminLoginComponent {}
