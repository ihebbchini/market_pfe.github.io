import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisiteurclientssaysComponent } from './visiteurclientssays.component';

describe('VisiteurclientssaysComponent', () => {
  let component: VisiteurclientssaysComponent;
  let fixture: ComponentFixture<VisiteurclientssaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisiteurclientssaysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisiteurclientssaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
