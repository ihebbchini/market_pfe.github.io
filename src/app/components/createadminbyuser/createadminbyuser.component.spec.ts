import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateadminbyuserComponent } from './createadminbyuser.component';

describe('CreateadminbyuserComponent', () => {
  let component: CreateadminbyuserComponent;
  let fixture: ComponentFixture<CreateadminbyuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateadminbyuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateadminbyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
