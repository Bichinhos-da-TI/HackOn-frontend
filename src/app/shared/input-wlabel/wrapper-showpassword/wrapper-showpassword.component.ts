import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-wrapper-showpassword',
  standalone: true,
  imports: [],
  templateUrl: './wrapper-showpassword.component.html',
  styleUrl: './wrapper-showpassword.component.css',
})
export class WrapperShowpasswordComponent {
  value = false;
  @Output() ClickEmit = new EventEmitter<boolean>();

  emitValue() {
    this.value = !this.value;
    this.ClickEmit.emit(this.value);
  }
}
