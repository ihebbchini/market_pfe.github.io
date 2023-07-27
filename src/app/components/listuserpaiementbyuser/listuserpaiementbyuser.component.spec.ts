import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListuserpaiementbyuserComponent } from './listuserpaiementbyuser.component';

describe('ListuserpaiementbyuserComponent', () => {
  let component: ListuserpaiementbyuserComponent;
  let fixture: ComponentFixture<ListuserpaiementbyuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListuserpaiementbyuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListuserpaiementbyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
