import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditnotificationbyuserComponent } from './editnotificationbyuser.component';

describe('EditnotificationbyuserComponent', () => {
  let component: EditnotificationbyuserComponent;
  let fixture: ComponentFixture<EditnotificationbyuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditnotificationbyuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditnotificationbyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
