import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdiscountbyuserComponent } from './editdiscountbyuser.component';

describe('EditdiscountbyuserComponent', () => {
  let component: EditdiscountbyuserComponent;
  let fixture: ComponentFixture<EditdiscountbyuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditdiscountbyuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditdiscountbyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
