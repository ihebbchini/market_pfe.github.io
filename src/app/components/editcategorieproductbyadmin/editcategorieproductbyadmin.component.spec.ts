import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcategorieproductbyadminComponent } from './editcategorieproductbyadmin.component';

describe('EditcategorieproductbyadminComponent', () => {
  let component: EditcategorieproductbyadminComponent;
  let fixture: ComponentFixture<EditcategorieproductbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditcategorieproductbyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditcategorieproductbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
