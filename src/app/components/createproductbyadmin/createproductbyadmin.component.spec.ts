import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateproductbyadminComponent } from './createproductbyadmin.component';

describe('CreateproductbyadminComponent', () => {
  let component: CreateproductbyadminComponent;
  let fixture: ComponentFixture<CreateproductbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateproductbyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateproductbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
