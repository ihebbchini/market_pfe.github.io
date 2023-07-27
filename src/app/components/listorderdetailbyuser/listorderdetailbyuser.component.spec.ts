import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListorderdetailbyuserComponent } from './listorderdetailbyuser.component';

describe('ListorderdetailbyuserComponent', () => {
  let component: ListorderdetailbyuserComponent;
  let fixture: ComponentFixture<ListorderdetailbyuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListorderdetailbyuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListorderdetailbyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
