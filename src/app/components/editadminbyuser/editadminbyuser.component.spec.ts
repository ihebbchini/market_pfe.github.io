import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditadminbyuserComponent } from './editadminbyuser.component';

describe('EditadminbyuserComponent', () => {
  let component: EditadminbyuserComponent;
  let fixture: ComponentFixture<EditadminbyuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditadminbyuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditadminbyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
