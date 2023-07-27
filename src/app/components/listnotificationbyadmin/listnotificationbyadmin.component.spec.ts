import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListnotificationbyadminComponent } from './listnotificationbyadmin.component';

describe('ListnotificationbyadminComponent', () => {
  let component: ListnotificationbyadminComponent;
  let fixture: ComponentFixture<ListnotificationbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListnotificationbyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListnotificationbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
