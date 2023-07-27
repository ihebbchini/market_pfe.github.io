import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcarteitembyadminComponent } from './listcarteitembyadmin.component';

describe('ListcarteitembyadminComponent', () => {
  let component: ListcarteitembyadminComponent;
  let fixture: ComponentFixture<ListcarteitembyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListcarteitembyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListcarteitembyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
