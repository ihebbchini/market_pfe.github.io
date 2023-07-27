import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisiteurloginComponent } from './visiteurlogin.component';

describe('VisiteurloginComponent', () => {
  let component: VisiteurloginComponent;
  let fixture: ComponentFixture<VisiteurloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisiteurloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisiteurloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
