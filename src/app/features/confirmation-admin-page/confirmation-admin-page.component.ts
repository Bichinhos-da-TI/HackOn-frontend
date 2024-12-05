import { Component } from '@angular/core';
import { BackgroundComponent } from '../../shared/background/background.component';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-confirmation-admin-page',
  standalone: true,
  imports: [BackgroundComponent, HeaderComponent],
  templateUrl: './confirmation-admin-page.component.html',
  styleUrl: './confirmation-admin-page.component.css',
})
export class ConfirmationAdminPageComponent {}
