import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CadAdminPageComponent } from './features/cad-admin-page/cad-admin-page.component';
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CadAdminPageComponent,HeaderComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'HackOn';
}
