import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdituserpaiementbyuserComponent } from './edituserpaiementbyuser.component';

describe('EdituserpaiementbyuserComponent', () => {
  let component: EdituserpaiementbyuserComponent;
  let fixture: ComponentFixture<EdituserpaiementbyuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdituserpaiementbyuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdituserpaiementbyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
