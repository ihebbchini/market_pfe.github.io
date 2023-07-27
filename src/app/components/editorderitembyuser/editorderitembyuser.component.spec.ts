import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorderitembyuserComponent } from './editorderitembyuser.component';

describe('EditorderitembyuserComponent', () => {
  let component: EditorderitembyuserComponent;
  let fixture: ComponentFixture<EditorderitembyuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorderitembyuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditorderitembyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
