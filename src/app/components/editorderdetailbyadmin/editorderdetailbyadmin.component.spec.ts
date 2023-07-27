import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorderdetailbyadminComponent } from './editorderdetailbyadmin.component';

describe('EditorderdetailbyadminComponent', () => {
  let component: EditorderdetailbyadminComponent;
  let fixture: ComponentFixture<EditorderdetailbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorderdetailbyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditorderdetailbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
