import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListorderdetailbyadminComponent } from './listorderdetailbyadmin.component';

describe('ListorderdetailbyadminComponent', () => {
  let component: ListorderdetailbyadminComponent;
  let fixture: ComponentFixture<ListorderdetailbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListorderdetailbyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListorderdetailbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
