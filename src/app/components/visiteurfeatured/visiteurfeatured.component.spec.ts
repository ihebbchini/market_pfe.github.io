import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisiteurfeaturedComponent } from './visiteurfeatured.component';

describe('VisiteurfeaturedComponent', () => {
  let component: VisiteurfeaturedComponent;
  let fixture: ComponentFixture<VisiteurfeaturedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisiteurfeaturedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisiteurfeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
