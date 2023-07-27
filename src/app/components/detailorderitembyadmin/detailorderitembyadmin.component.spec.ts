import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailorderitembyadminComponent } from './detailorderitembyadmin.component';

describe('DetailorderitembyadminComponent', () => {
  let component: DetailorderitembyadminComponent;
  let fixture: ComponentFixture<DetailorderitembyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailorderitembyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailorderitembyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
