import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatepaymentdetailbyadminComponent } from './createpaymentdetailbyadmin.component';

describe('CreatepaymentdetailbyadminComponent', () => {
  let component: CreatepaymentdetailbyadminComponent;
  let fixture: ComponentFixture<CreatepaymentdetailbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatepaymentdetailbyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatepaymentdetailbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
