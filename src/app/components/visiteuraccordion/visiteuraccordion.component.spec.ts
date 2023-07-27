import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisiteuraccordionComponent } from './visiteuraccordion.component';

describe('VisiteuraccordionComponent', () => {
  let component: VisiteuraccordionComponent;
  let fixture: ComponentFixture<VisiteuraccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisiteuraccordionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisiteuraccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
