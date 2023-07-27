import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartbyadminComponent } from './chartbyadmin.component';

describe('ChartbyadminComponent', () => {
  let component: ChartbyadminComponent;
  let fixture: ComponentFixture<ChartbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartbyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
