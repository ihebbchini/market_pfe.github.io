import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisiteurmenuComponent } from './visiteurmenu.component';

describe('VisiteurmenuComponent', () => {
  let component: VisiteurmenuComponent;
  let fixture: ComponentFixture<VisiteurmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisiteurmenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisiteurmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
