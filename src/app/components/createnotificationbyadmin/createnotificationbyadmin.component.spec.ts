import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatenotificationbyadminComponent } from './createnotificationbyadmin.component';

describe('CreatenotificationbyadminComponent', () => {
  let component: CreatenotificationbyadminComponent;
  let fixture: ComponentFixture<CreatenotificationbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatenotificationbyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatenotificationbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
