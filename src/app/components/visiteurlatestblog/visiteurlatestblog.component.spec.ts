import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisiteurlatestblogComponent } from './visiteurlatestblog.component';

describe('VisiteurlatestblogComponent', () => {
  let component: VisiteurlatestblogComponent;
  let fixture: ComponentFixture<VisiteurlatestblogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisiteurlatestblogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisiteurlatestblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
