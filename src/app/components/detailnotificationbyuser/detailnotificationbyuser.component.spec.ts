import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailnotificationbyuserComponent } from './detailnotificationbyuser.component';

describe('DetailnotificationbyuserComponent', () => {
  let component: DetailnotificationbyuserComponent;
  let fixture: ComponentFixture<DetailnotificationbyuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailnotificationbyuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailnotificationbyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
