import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailorderdetailbyadminComponent } from './detailorderdetailbyadmin.component';

describe('DetailorderdetailbyadminComponent', () => {
  let component: DetailorderdetailbyadminComponent;
  let fixture: ComponentFixture<DetailorderdetailbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailorderdetailbyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailorderdetailbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
