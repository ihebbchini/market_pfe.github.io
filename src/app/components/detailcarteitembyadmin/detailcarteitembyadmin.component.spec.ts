import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailcarteitembyadminComponent } from './detailcarteitembyadmin.component';

describe('DetailcarteitembyadminComponent', () => {
  let component: DetailcarteitembyadminComponent;
  let fixture: ComponentFixture<DetailcarteitembyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailcarteitembyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailcarteitembyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
