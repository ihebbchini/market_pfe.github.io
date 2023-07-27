import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListorderitembyadminComponent } from './listorderitembyadmin.component';

describe('ListorderitembyadminComponent', () => {
  let component: ListorderitembyadminComponent;
  let fixture: ComponentFixture<ListorderitembyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListorderitembyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListorderitembyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
