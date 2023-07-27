import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpaymentdetailbyadminComponent } from './editpaymentdetailbyadmin.component';

describe('EditpaymentdetailbyadminComponent', () => {
  let component: EditpaymentdetailbyadminComponent;
  let fixture: ComponentFixture<EditpaymentdetailbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditpaymentdetailbyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditpaymentdetailbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
