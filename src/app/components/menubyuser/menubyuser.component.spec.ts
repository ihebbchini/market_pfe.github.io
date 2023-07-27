import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenubyuserComponent } from './menubyuser.component';

describe('MenubyuserComponent', () => {
  let component: MenubyuserComponent;
  let fixture: ComponentFixture<MenubyuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenubyuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenubyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
