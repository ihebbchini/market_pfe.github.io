import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailcategorieproductbyuserComponent } from './detailcategorieproductbyuser.component';

describe('DetailcategorieproductbyuserComponent', () => {
  let component: DetailcategorieproductbyuserComponent;
  let fixture: ComponentFixture<DetailcategorieproductbyuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailcategorieproductbyuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailcategorieproductbyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
