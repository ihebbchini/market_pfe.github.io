import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisiteurmyaccountComponent } from './visiteurmyaccount.component';

describe('VisiteurmyaccountComponent', () => {
  let component: VisiteurmyaccountComponent;
  let fixture: ComponentFixture<VisiteurmyaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisiteurmyaccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisiteurmyaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
