import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisiteurnewarrivalComponent } from './visiteurnewarrival.component';

describe('VisiteurnewarrivalComponent', () => {
  let component: VisiteurnewarrivalComponent;
  let fixture: ComponentFixture<VisiteurnewarrivalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisiteurnewarrivalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisiteurnewarrivalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
