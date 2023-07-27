import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateorderdetailbyuserComponent } from './createorderdetailbyuser.component';

describe('CreateorderdetailbyuserComponent', () => {
  let component: CreateorderdetailbyuserComponent;
  let fixture: ComponentFixture<CreateorderdetailbyuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateorderdetailbyuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateorderdetailbyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
