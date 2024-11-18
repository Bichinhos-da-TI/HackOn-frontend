import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { BackgroundComponent } from "./shared/background/background.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, BackgroundComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'HackOn';
}
