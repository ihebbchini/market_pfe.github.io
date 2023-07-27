import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartbyuserComponent } from './chartbyuser.component';

describe('ChartbyuserComponent', () => {
  let component: ChartbyuserComponent;
  let fixture: ComponentFixture<ChartbyuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartbyuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartbyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
