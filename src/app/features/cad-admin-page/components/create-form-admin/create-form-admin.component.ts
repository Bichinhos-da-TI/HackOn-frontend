import { Component, ViewEncapsulation } from '@angular/core';
import { InputWLabelComponent } from '../../../../shared/input-wlabel/input-wlabel.component';

@Component({
  selector: 'app-create-form-admin',
  standalone: true,
  imports: [InputWLabelComponent],
  templateUrl: './create-form-admin.component.html',
  styleUrl: './create-form-admin.component.css',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CreateFormAdminComponent {
  name = "";
  passwordType:"password"|"text" = "password"

  onName(value:string){
    this.name = value;
  }

  changeViewPassword(){
    if(this.passwordType === "password"){
      this.passwordType = "text";
    }else if(this.passwordType === "text"){
      this.passwordType = "password";
    }
  }
}
