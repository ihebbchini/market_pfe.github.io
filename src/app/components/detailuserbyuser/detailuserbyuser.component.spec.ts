import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailuserbyuserComponent } from './detailuserbyuser.component';

describe('DetailuserbyuserComponent', () => {
  let component: DetailuserbyuserComponent;
  let fixture: ComponentFixture<DetailuserbyuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailuserbyuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailuserbyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
