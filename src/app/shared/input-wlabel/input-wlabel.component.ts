import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-wlabel',
  standalone: true,
  imports: [NgStyle, FormsModule],
  templateUrl: './input-wlabel.component.html',
  styleUrl: './input-wlabel.component.css',
})
export class InputWLabelComponent implements OnInit {
  InputStyles: Record<string, string> = {};
  value = '';
  @Input() name = '';
  @Input() type = '';
  @Input() borderColor: null | string = null;
  @Input() borderWidth: null | string = null;
  @Input() borderStyle: null | string = null;
  @Input() borderRadius: null | string = null;
  @Input() backgroundInput: null | string = null;
  @Input() fontColor: null | string = null;
  @Output() InputTyping = new EventEmitter<string>();
  setInputStyles() {
    this.InputStyles = {
      'border-color': this.borderColor ? this.borderColor : '#333134',
      'border-width': this.borderWidth ? this.borderWidth : '1px',
      'border-style': this.borderStyle ? this.borderStyle : 'solid',
      'border-radius': this.borderRadius ? this.borderRadius : '4px',
      'background-color': this.backgroundInput
        ? this.backgroundInput
        : '#3e4a78',
      'color': this.fontColor ? this.fontColor : '#FFFFFF',
    };
  }

  onChangeNameValue(value:string){
    this.InputTyping.emit(value);
  }

  ngOnInit(): void {
    this.setInputStyles();
  }
}
