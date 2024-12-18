import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCadEventComponent } from './form-cad-event.component';

describe('FormCadEventComponent', () => {
  let component: FormCadEventComponent;
  let fixture: ComponentFixture<FormCadEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormCadEventComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCadEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
