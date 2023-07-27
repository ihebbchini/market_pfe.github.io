import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisiteurmywishlistComponent } from './visiteurmywishlist.component';

describe('VisiteurmywishlistComponent', () => {
  let component: VisiteurmywishlistComponent;
  let fixture: ComponentFixture<VisiteurmywishlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisiteurmywishlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisiteurmywishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
