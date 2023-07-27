import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateinventoryproductbyadminComponent } from './createinventoryproductbyadmin.component';

describe('CreateinventoryproductbyadminComponent', () => {
  let component: CreateinventoryproductbyadminComponent;
  let fixture: ComponentFixture<CreateinventoryproductbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateinventoryproductbyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateinventoryproductbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
