import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderbyuserComponent } from './headerbyuser.component';

describe('HeaderbyuserComponent', () => {
  let component: HeaderbyuserComponent;
  let fixture: ComponentFixture<HeaderbyuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderbyuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderbyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
