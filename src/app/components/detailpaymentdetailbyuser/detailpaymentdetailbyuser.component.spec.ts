import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailpaymentdetailbyuserComponent } from './detailpaymentdetailbyuser.component';

describe('DetailpaymentdetailbyuserComponent', () => {
  let component: DetailpaymentdetailbyuserComponent;
  let fixture: ComponentFixture<DetailpaymentdetailbyuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailpaymentdetailbyuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailpaymentdetailbyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
