import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatepaymentdetailbyuserComponent } from './createpaymentdetailbyuser.component';

describe('CreatepaymentdetailbyuserComponent', () => {
  let component: CreatepaymentdetailbyuserComponent;
  let fixture: ComponentFixture<CreatepaymentdetailbyuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatepaymentdetailbyuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatepaymentdetailbyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
