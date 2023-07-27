import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdituserpaiementbyadminComponent } from './edituserpaiementbyadmin.component';

describe('EdituserpaiementbyadminComponent', () => {
  let component: EdituserpaiementbyadminComponent;
  let fixture: ComponentFixture<EdituserpaiementbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdituserpaiementbyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdituserpaiementbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
