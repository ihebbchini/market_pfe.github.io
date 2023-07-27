import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisiteurheaderComponent } from './visiteurheader.component';

describe('VisiteurheaderComponent', () => {
  let component: VisiteurheaderComponent;
  let fixture: ComponentFixture<VisiteurheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisiteurheaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisiteurheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
