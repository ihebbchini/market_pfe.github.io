import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterbyuserComponent } from './footerbyuser.component';

describe('FooterbyuserComponent', () => {
  let component: FooterbyuserComponent;
  let fixture: ComponentFixture<FooterbyuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterbyuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterbyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
