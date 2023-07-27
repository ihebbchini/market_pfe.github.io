import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisiteurtabComponent } from './visiteurtab.component';

describe('VisiteurtabComponent', () => {
  let component: VisiteurtabComponent;
  let fixture: ComponentFixture<VisiteurtabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisiteurtabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisiteurtabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
