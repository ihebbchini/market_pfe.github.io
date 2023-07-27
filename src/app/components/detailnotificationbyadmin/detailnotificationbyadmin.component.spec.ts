import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailnotificationbyadminComponent } from './detailnotificationbyadmin.component';

describe('DetailnotificationbyadminComponent', () => {
  let component: DetailnotificationbyadminComponent;
  let fixture: ComponentFixture<DetailnotificationbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailnotificationbyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailnotificationbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
