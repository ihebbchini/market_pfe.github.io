import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisiteurbestsellerComponent } from './visiteurbestseller.component';

describe('VisiteurbestsellerComponent', () => {
  let component: VisiteurbestsellerComponent;
  let fixture: ComponentFixture<VisiteurbestsellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisiteurbestsellerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisiteurbestsellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
