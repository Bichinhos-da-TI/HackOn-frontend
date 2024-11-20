import { Component } from '@angular/core';
import { BackgroundComponent } from '../../shared/background/background.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [BackgroundComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {}
