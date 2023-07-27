import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateorderdetailbyadminComponent } from './createorderdetailbyadmin.component';

describe('CreateorderdetailbyadminComponent', () => {
  let component: CreateorderdetailbyadminComponent;
  let fixture: ComponentFixture<CreateorderdetailbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateorderdetailbyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateorderdetailbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
