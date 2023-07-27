import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateuserpaiementbyuserComponent } from './createuserpaiementbyuser.component';

describe('CreateuserpaiementbyuserComponent', () => {
  let component: CreateuserpaiementbyuserComponent;
  let fixture: ComponentFixture<CreateuserpaiementbyuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateuserpaiementbyuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateuserpaiementbyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
