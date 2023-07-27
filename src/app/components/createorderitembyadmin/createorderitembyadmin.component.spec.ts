import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateorderitembyadminComponent } from './createorderitembyadmin.component';

describe('CreateorderitembyadminComponent', () => {
  let component: CreateorderitembyadminComponent;
  let fixture: ComponentFixture<CreateorderitembyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateorderitembyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateorderitembyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
