import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListuserpaiementbyadminComponent } from './listuserpaiementbyadmin.component';

describe('ListuserpaiementbyadminComponent', () => {
  let component: ListuserpaiementbyadminComponent;
  let fixture: ComponentFixture<ListuserpaiementbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListuserpaiementbyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListuserpaiementbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
