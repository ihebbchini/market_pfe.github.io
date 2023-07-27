import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisiteurmapComponent } from './visiteurmap.component';

describe('VisiteurmapComponent', () => {
  let component: VisiteurmapComponent;
  let fixture: ComponentFixture<VisiteurmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisiteurmapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisiteurmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
