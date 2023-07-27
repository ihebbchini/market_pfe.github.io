import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisiteurproducttagComponent } from './visiteurproducttag.component';

describe('VisiteurproducttagComponent', () => {
  let component: VisiteurproducttagComponent;
  let fixture: ComponentFixture<VisiteurproducttagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisiteurproducttagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisiteurproducttagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
