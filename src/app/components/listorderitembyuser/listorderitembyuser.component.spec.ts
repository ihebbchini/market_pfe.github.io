import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListorderitembyuserComponent } from './listorderitembyuser.component';

describe('ListorderitembyuserComponent', () => {
  let component: ListorderitembyuserComponent;
  let fixture: ComponentFixture<ListorderitembyuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListorderitembyuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListorderitembyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
