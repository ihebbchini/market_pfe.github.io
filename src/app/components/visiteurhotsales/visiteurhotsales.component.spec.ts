import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisiteurhotsalesComponent } from './visiteurhotsales.component';

describe('VisiteurhotsalesComponent', () => {
  let component: VisiteurhotsalesComponent;
  let fixture: ComponentFixture<VisiteurhotsalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisiteurhotsalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisiteurhotsalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
