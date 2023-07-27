import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListproductbyuserComponent } from './listproductbyuser.component';

describe('ListproductbyuserComponent', () => {
  let component: ListproductbyuserComponent;
  let fixture: ComponentFixture<ListproductbyuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListproductbyuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListproductbyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
