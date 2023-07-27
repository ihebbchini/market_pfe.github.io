import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecategorieproductbyadminComponent } from './createcategorieproductbyadmin.component';

describe('CreatecategorieproductbyadminComponent', () => {
  let component: CreatecategorieproductbyadminComponent;
  let fixture: ComponentFixture<CreatecategorieproductbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatecategorieproductbyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatecategorieproductbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
