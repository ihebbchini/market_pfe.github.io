import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorderitembyadminComponent } from './editorderitembyadmin.component';

describe('EditorderitembyadminComponent', () => {
  let component: EditorderitembyadminComponent;
  let fixture: ComponentFixture<EditorderitembyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorderitembyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditorderitembyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
