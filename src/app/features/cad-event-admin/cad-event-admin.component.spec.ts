import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadEventAdminComponent } from './cad-event-admin.component';

describe('CadEventAdminComponent', () => {
  let component: CadEventAdminComponent;
  let fixture: ComponentFixture<CadEventAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadEventAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadEventAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
