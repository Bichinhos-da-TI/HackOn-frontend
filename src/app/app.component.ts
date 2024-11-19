import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SubmitComponent } from './submit/submit.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SubmitComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'HackOn';
}
