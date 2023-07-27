import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListnotificationbyuserComponent } from './listnotificationbyuser.component';

describe('ListnotificationbyuserComponent', () => {
  let component: ListnotificationbyuserComponent;
  let fixture: ComponentFixture<ListnotificationbyuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListnotificationbyuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListnotificationbyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
