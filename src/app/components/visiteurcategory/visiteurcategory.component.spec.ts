import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisiteurcategoryComponent } from './visiteurcategory.component';

describe('VisiteurcategoryComponent', () => {
  let component: VisiteurcategoryComponent;
  let fixture: ComponentFixture<VisiteurcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisiteurcategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisiteurcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
