import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListuserprofilbyuserComponent } from './listuserprofilbyuser.component';

describe('ListuserprofilbyuserComponent', () => {
  let component: ListuserprofilbyuserComponent;
  let fixture: ComponentFixture<ListuserprofilbyuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListuserprofilbyuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListuserprofilbyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
