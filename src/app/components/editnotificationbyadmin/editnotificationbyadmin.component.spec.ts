import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditnotificationbyadminComponent } from './editnotificationbyadmin.component';

describe('EditnotificationbyadminComponent', () => {
  let component: EditnotificationbyadminComponent;
  let fixture: ComponentFixture<EditnotificationbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditnotificationbyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditnotificationbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
