import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CadAdminPageComponent } from './features/cad-admin-page/cad-admin-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CadAdminPageComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'HackOn';
}
