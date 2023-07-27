import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailorderdetailbyuserComponent } from './detailorderdetailbyuser.component';

describe('DetailorderdetailbyuserComponent', () => {
  let component: DetailorderdetailbyuserComponent;
  let fixture: ComponentFixture<DetailorderdetailbyuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailorderdetailbyuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailorderdetailbyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
