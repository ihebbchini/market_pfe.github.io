import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailproductbyuserComponent } from './detailproductbyuser.component';

describe('DetailproductbyuserComponent', () => {
  let component: DetailproductbyuserComponent;
  let fixture: ComponentFixture<DetailproductbyuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailproductbyuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailproductbyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
