import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcategorieproductbyadminComponent } from './listcategorieproductbyadmin.component';

describe('ListcategorieproductbyadminComponent', () => {
  let component: ListcategorieproductbyadminComponent;
  let fixture: ComponentFixture<ListcategorieproductbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListcategorieproductbyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListcategorieproductbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
