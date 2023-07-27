import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListinventoryproductbyuserComponent } from './listinventoryproductbyuser.component';

describe('ListinventoryproductbyuserComponent', () => {
  let component: ListinventoryproductbyuserComponent;
  let fixture: ComponentFixture<ListinventoryproductbyuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListinventoryproductbyuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListinventoryproductbyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
