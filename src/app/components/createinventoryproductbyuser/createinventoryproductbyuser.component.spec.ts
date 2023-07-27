import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateinventoryproductbyuserComponent } from './createinventoryproductbyuser.component';

describe('CreateinventoryproductbyuserComponent', () => {
  let component: CreateinventoryproductbyuserComponent;
  let fixture: ComponentFixture<CreateinventoryproductbyuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateinventoryproductbyuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateinventoryproductbyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
