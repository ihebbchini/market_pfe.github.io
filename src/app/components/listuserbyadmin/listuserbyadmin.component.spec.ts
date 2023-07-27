import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListuserbyadminComponent } from './listuserbyadmin.component';

describe('ListuserbyadminComponent', () => {
  let component: ListuserbyadminComponent;
  let fixture: ComponentFixture<ListuserbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListuserbyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListuserbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
