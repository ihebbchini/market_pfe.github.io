import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisiteurproductdetailComponent } from './visiteurproductdetail.component';

describe('VisiteurproductdetailComponent', () => {
  let component: VisiteurproductdetailComponent;
  let fixture: ComponentFixture<VisiteurproductdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisiteurproductdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisiteurproductdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
