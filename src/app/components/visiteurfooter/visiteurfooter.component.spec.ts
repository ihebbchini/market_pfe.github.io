import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisiteurfooterComponent } from './visiteurfooter.component';

describe('VisiteurfooterComponent', () => {
  let component: VisiteurfooterComponent;
  let fixture: ComponentFixture<VisiteurfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisiteurfooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisiteurfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
