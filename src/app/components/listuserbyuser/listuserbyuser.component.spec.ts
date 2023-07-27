import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListuserbyuserComponent } from './listuserbyuser.component';

describe('ListuserbyuserComponent', () => {
  let component: ListuserbyuserComponent;
  let fixture: ComponentFixture<ListuserbyuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListuserbyuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListuserbyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
