import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisiteursearchComponent } from './visiteursearch.component';

describe('VisiteursearchComponent', () => {
  let component: VisiteursearchComponent;
  let fixture: ComponentFixture<VisiteursearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisiteursearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisiteursearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
