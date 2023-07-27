import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdituserprofilbyuserComponent } from './edituserprofilbyuser.component';

describe('EdituserprofilbyuserComponent', () => {
  let component: EdituserprofilbyuserComponent;
  let fixture: ComponentFixture<EdituserprofilbyuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdituserprofilbyuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdituserprofilbyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
