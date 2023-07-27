import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListdiscountbyuserComponent } from './listdiscountbyuser.component';

describe('ListdiscountbyuserComponent', () => {
  let component: ListdiscountbyuserComponent;
  let fixture: ComponentFixture<ListdiscountbyuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListdiscountbyuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListdiscountbyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
