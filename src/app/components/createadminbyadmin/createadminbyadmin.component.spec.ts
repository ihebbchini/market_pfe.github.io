import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateadminbyadminComponent } from './createadminbyadmin.component';

describe('CreateadminbyadminComponent', () => {
  let component: CreateadminbyadminComponent;
  let fixture: ComponentFixture<CreateadminbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateadminbyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateadminbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
