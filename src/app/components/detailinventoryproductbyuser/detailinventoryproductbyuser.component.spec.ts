import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailinventoryproductbyuserComponent } from './detailinventoryproductbyuser.component';

describe('DetailinventoryproductbyuserComponent', () => {
  let component: DetailinventoryproductbyuserComponent;
  let fixture: ComponentFixture<DetailinventoryproductbyuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailinventoryproductbyuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailinventoryproductbyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
