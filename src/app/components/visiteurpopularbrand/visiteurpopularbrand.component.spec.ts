import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisiteurpopularbrandComponent } from './visiteurpopularbrand.component';

describe('VisiteurpopularbrandComponent', () => {
  let component: VisiteurpopularbrandComponent;
  let fixture: ComponentFixture<VisiteurpopularbrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisiteurpopularbrandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisiteurpopularbrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
