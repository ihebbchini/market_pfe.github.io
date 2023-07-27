import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpaymentdetailbyadminComponent } from './listpaymentdetailbyadmin.component';

describe('ListpaymentdetailbyadminComponent', () => {
  let component: ListpaymentdetailbyadminComponent;
  let fixture: ComponentFixture<ListpaymentdetailbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListpaymentdetailbyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListpaymentdetailbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
