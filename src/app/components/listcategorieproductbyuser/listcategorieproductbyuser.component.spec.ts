import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcategorieproductbyuserComponent } from './listcategorieproductbyuser.component';

describe('ListcategorieproductbyuserComponent', () => {
  let component: ListcategorieproductbyuserComponent;
  let fixture: ComponentFixture<ListcategorieproductbyuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListcategorieproductbyuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListcategorieproductbyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
