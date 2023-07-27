import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditproductbyuserComponent } from './editproductbyuser.component';

describe('EditproductbyuserComponent', () => {
  let component: EditproductbyuserComponent;
  let fixture: ComponentFixture<EditproductbyuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditproductbyuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditproductbyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
