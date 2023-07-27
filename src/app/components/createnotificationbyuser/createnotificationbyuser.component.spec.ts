import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatenotificationbyuserComponent } from './createnotificationbyuser.component';

describe('CreatenotificationbyuserComponent', () => {
  let component: CreatenotificationbyuserComponent;
  let fixture: ComponentFixture<CreatenotificationbyuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatenotificationbyuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatenotificationbyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
