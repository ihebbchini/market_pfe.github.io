import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpaymentdetailbyuserComponent } from './listpaymentdetailbyuser.component';

describe('ListpaymentdetailbyuserComponent', () => {
  let component: ListpaymentdetailbyuserComponent;
  let fixture: ComponentFixture<ListpaymentdetailbyuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListpaymentdetailbyuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListpaymentdetailbyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
