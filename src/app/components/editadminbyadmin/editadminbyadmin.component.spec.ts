import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditadminbyadminComponent } from './editadminbyadmin.component';

describe('EditadminbyadminComponent', () => {
  let component: EditadminbyadminComponent;
  let fixture: ComponentFixture<EditadminbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditadminbyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditadminbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
