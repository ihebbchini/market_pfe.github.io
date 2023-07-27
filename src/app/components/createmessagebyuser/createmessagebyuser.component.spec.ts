import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatemessagebyuserComponent } from './createmessagebyuser.component';

describe('CreatemessagebyuserComponent', () => {
  let component: CreatemessagebyuserComponent;
  let fixture: ComponentFixture<CreatemessagebyuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatemessagebyuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatemessagebyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
