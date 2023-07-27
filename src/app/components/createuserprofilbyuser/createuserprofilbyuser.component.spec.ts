import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateuserprofilbyuserComponent } from './createuserprofilbyuser.component';

describe('CreateuserprofilbyuserComponent', () => {
  let component: CreateuserprofilbyuserComponent;
  let fixture: ComponentFixture<CreateuserprofilbyuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateuserprofilbyuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateuserprofilbyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
