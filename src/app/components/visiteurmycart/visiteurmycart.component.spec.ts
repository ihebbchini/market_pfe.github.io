import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisiteurmycartComponent } from './visiteurmycart.component';

describe('VisiteurmycartComponent', () => {
  let component: VisiteurmycartComponent;
  let fixture: ComponentFixture<VisiteurmycartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisiteurmycartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisiteurmycartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
