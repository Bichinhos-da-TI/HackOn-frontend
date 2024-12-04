import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-background',
  standalone: true,
  imports: [],
  styleUrl: './background.component.css',
  templateUrl: './background.component.html',
})
export class BackgroundComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    if (typeof document != 'undefined') {
      // document.body.classList.add('bodyOverflowBackground');
    }
  }
}
