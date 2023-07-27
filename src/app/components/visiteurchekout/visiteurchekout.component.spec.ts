import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisiteurchekoutComponent } from './visiteurchekout.component';

describe('VisiteurchekoutComponent', () => {
  let component: VisiteurchekoutComponent;
  let fixture: ComponentFixture<VisiteurchekoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisiteurchekoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisiteurchekoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
