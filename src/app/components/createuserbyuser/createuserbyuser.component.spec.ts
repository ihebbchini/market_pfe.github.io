import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateuserbyuserComponent } from './createuserbyuser.component';

describe('CreateuserbyuserComponent', () => {
  let component: CreateuserbyuserComponent;
  let fixture: ComponentFixture<CreateuserbyuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateuserbyuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateuserbyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
