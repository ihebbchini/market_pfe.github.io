import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListproductbyadminComponent } from './listproductbyadmin.component';

describe('ListproductbyadminComponent', () => {
  let component: ListproductbyadminComponent;
  let fixture: ComponentFixture<ListproductbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListproductbyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListproductbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
