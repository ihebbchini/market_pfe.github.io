import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisiteurgalleryComponent } from './visiteurgallery.component';

describe('VisiteurgalleryComponent', () => {
  let component: VisiteurgalleryComponent;
  let fixture: ComponentFixture<VisiteurgalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisiteurgalleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisiteurgalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
