import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditinventoryproductbyuserComponent } from './editinventoryproductbyuser.component';

describe('EditinventoryproductbyuserComponent', () => {
  let component: EditinventoryproductbyuserComponent;
  let fixture: ComponentFixture<EditinventoryproductbyuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditinventoryproductbyuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditinventoryproductbyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
