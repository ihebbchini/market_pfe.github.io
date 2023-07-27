import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisiteurmostviewedComponent } from './visiteurmostviewed.component';

describe('VisiteurmostviewedComponent', () => {
  let component: VisiteurmostviewedComponent;
  let fixture: ComponentFixture<VisiteurmostviewedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisiteurmostviewedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisiteurmostviewedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
