import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcarteitembyadminComponent } from './editcarteitembyadmin.component';

describe('EditcarteitembyadminComponent', () => {
  let component: EditcarteitembyadminComponent;
  let fixture: ComponentFixture<EditcarteitembyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditcarteitembyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditcarteitembyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
