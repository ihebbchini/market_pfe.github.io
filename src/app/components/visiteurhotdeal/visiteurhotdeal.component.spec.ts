import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisiteurhotdealComponent } from './visiteurhotdeal.component';

describe('VisiteurhotdealComponent', () => {
  let component: VisiteurhotdealComponent;
  let fixture: ComponentFixture<VisiteurhotdealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisiteurhotdealComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisiteurhotdealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
