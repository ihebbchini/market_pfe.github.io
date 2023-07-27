import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatbyadminComponent } from './statbyadmin.component';

describe('StatbyadminComponent', () => {
  let component: StatbyadminComponent;
  let fixture: ComponentFixture<StatbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatbyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
