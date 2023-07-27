import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailuserbyadminComponent } from './detailuserbyadmin.component';

describe('DetailuserbyadminComponent', () => {
  let component: DetailuserbyadminComponent;
  let fixture: ComponentFixture<DetailuserbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailuserbyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailuserbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
