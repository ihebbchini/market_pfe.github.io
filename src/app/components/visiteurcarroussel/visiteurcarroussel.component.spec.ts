import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisiteurcarrousselComponent } from './visiteurcarroussel.component';

describe('VisiteurcarrousselComponent', () => {
  let component: VisiteurcarrousselComponent;
  let fixture: ComponentFixture<VisiteurcarrousselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisiteurcarrousselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisiteurcarrousselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
