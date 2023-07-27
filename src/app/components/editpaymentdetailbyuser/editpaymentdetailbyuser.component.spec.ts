import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpaymentdetailbyuserComponent } from './editpaymentdetailbyuser.component';

describe('EditpaymentdetailbyuserComponent', () => {
  let component: EditpaymentdetailbyuserComponent;
  let fixture: ComponentFixture<EditpaymentdetailbyuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditpaymentdetailbyuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditpaymentdetailbyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
