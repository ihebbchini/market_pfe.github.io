import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorderdetailbyuserComponent } from './editorderdetailbyuser.component';

describe('EditorderdetailbyuserComponent', () => {
  let component: EditorderdetailbyuserComponent;
  let fixture: ComponentFixture<EditorderdetailbyuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorderdetailbyuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditorderdetailbyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
