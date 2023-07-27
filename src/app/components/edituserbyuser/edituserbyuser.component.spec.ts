import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdituserbyuserComponent } from './edituserbyuser.component';

describe('EdituserbyuserComponent', () => {
  let component: EdituserbyuserComponent;
  let fixture: ComponentFixture<EdituserbyuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdituserbyuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdituserbyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
