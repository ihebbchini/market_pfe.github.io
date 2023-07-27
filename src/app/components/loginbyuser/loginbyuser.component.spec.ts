import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginbyuserComponent } from './loginbyuser.component';

describe('LoginbyuserComponent', () => {
  let component: LoginbyuserComponent;
  let fixture: ComponentFixture<LoginbyuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginbyuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginbyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
