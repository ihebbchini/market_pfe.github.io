import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateproductbyuserComponent } from './createproductbyuser.component';

describe('CreateproductbyuserComponent', () => {
  let component: CreateproductbyuserComponent;
  let fixture: ComponentFixture<CreateproductbyuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateproductbyuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateproductbyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
