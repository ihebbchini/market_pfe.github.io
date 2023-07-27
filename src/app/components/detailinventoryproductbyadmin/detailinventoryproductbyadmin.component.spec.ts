import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailinventoryproductbyadminComponent } from './detailinventoryproductbyadmin.component';

describe('DetailinventoryproductbyadminComponent', () => {
  let component: DetailinventoryproductbyadminComponent;
  let fixture: ComponentFixture<DetailinventoryproductbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailinventoryproductbyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailinventoryproductbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
