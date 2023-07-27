import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcarteitembyuserComponent } from './listcarteitembyuser.component';

describe('ListcarteitembyuserComponent', () => {
  let component: ListcarteitembyuserComponent;
  let fixture: ComponentFixture<ListcarteitembyuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListcarteitembyuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListcarteitembyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
