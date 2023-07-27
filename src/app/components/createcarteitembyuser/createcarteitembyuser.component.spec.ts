import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecarteitembyuserComponent } from './createcarteitembyuser.component';

describe('CreatecarteitembyuserComponent', () => {
  let component: CreatecarteitembyuserComponent;
  let fixture: ComponentFixture<CreatecarteitembyuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatecarteitembyuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatecarteitembyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
