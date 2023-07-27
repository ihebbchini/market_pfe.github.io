import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditinventoryproductbyadminComponent } from './editinventoryproductbyadmin.component';

describe('EditinventoryproductbyadminComponent', () => {
  let component: EditinventoryproductbyadminComponent;
  let fixture: ComponentFixture<EditinventoryproductbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditinventoryproductbyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditinventoryproductbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
