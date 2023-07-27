import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisiteurnewproductComponent } from './visiteurnewproduct.component';

describe('VisiteurnewproductComponent', () => {
  let component: VisiteurnewproductComponent;
  let fixture: ComponentFixture<VisiteurnewproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisiteurnewproductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisiteurnewproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
