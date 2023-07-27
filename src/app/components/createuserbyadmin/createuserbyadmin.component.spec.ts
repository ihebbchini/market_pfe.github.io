import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateuserbyadminComponent } from './createuserbyadmin.component';

describe('CreateuserbyadminComponent', () => {
  let component: CreateuserbyadminComponent;
  let fixture: ComponentFixture<CreateuserbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateuserbyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateuserbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
