import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisiteurlatestproductComponent } from './visiteurlatestproduct.component';

describe('VisiteurlatestproductComponent', () => {
  let component: VisiteurlatestproductComponent;
  let fixture: ComponentFixture<VisiteurlatestproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisiteurlatestproductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisiteurlatestproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
