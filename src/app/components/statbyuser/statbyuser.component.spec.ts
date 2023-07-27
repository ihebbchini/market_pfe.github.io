import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatbyuserComponent } from './statbyuser.component';

describe('StatbyuserComponent', () => {
  let component: StatbyuserComponent;
  let fixture: ComponentFixture<StatbyuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatbyuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatbyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
