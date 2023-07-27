import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailpaymentdetailbyadminComponent } from './detailpaymentdetailbyadmin.component';

describe('DetailpaymentdetailbyadminComponent', () => {
  let component: DetailpaymentdetailbyadminComponent;
  let fixture: ComponentFixture<DetailpaymentdetailbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailpaymentdetailbyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailpaymentdetailbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
