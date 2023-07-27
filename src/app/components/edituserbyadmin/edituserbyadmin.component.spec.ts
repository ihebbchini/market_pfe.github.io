import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdituserbyadminComponent } from './edituserbyadmin.component';

describe('EdituserbyadminComponent', () => {
  let component: EdituserbyadminComponent;
  let fixture: ComponentFixture<EdituserbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdituserbyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdituserbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
