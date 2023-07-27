import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcarteitembyuserComponent } from './editcarteitembyuser.component';

describe('EditcarteitembyuserComponent', () => {
  let component: EditcarteitembyuserComponent;
  let fixture: ComponentFixture<EditcarteitembyuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditcarteitembyuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditcarteitembyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
