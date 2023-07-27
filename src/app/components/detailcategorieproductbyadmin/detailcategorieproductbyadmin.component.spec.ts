import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailcategorieproductbyadminComponent } from './detailcategorieproductbyadmin.component';

describe('DetailcategorieproductbyadminComponent', () => {
  let component: DetailcategorieproductbyadminComponent;
  let fixture: ComponentFixture<DetailcategorieproductbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailcategorieproductbyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailcategorieproductbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
