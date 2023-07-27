import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailshoppingsessionbyuserComponent } from './detailshoppingsessionbyuser.component';

describe('DetailshoppingsessionbyuserComponent', () => {
  let component: DetailshoppingsessionbyuserComponent;
  let fixture: ComponentFixture<DetailshoppingsessionbyuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailshoppingsessionbyuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailshoppingsessionbyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
