import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisiteurregisterComponent } from './visiteurregister.component';

describe('VisiteurregisterComponent', () => {
  let component: VisiteurregisterComponent;
  let fixture: ComponentFixture<VisiteurregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisiteurregisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisiteurregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
