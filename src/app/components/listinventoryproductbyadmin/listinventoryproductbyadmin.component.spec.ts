import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListinventoryproductbyadminComponent } from './listinventoryproductbyadmin.component';

describe('ListinventoryproductbyadminComponent', () => {
  let component: ListinventoryproductbyadminComponent;
  let fixture: ComponentFixture<ListinventoryproductbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListinventoryproductbyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListinventoryproductbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
