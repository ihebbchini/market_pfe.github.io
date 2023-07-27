import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateorderitembyuserComponent } from './createorderitembyuser.component';

describe('CreateorderitembyuserComponent', () => {
  let component: CreateorderitembyuserComponent;
  let fixture: ComponentFixture<CreateorderitembyuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateorderitembyuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateorderitembyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
