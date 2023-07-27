import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListmessagebyuserComponent } from './listmessagebyuser.component';

describe('ListmessagebyuserComponent', () => {
  let component: ListmessagebyuserComponent;
  let fixture: ComponentFixture<ListmessagebyuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListmessagebyuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListmessagebyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
