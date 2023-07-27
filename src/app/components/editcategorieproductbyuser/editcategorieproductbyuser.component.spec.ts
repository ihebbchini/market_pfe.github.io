import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcategorieproductbyuserComponent } from './editcategorieproductbyuser.component';

describe('EditcategorieproductbyuserComponent', () => {
  let component: EditcategorieproductbyuserComponent;
  let fixture: ComponentFixture<EditcategorieproductbyuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditcategorieproductbyuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditcategorieproductbyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
