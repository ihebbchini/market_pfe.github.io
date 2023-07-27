import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateuserpaiementbyadminComponent } from './createuserpaiementbyadmin.component';

describe('CreateuserpaiementbyadminComponent', () => {
  let component: CreateuserpaiementbyadminComponent;
  let fixture: ComponentFixture<CreateuserpaiementbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateuserpaiementbyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateuserpaiementbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
