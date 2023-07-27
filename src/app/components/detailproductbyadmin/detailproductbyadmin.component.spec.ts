import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailproductbyadminComponent } from './detailproductbyadmin.component';

describe('DetailproductbyadminComponent', () => {
  let component: DetailproductbyadminComponent;
  let fixture: ComponentFixture<DetailproductbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailproductbyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailproductbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
