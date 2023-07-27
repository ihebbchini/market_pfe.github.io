import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailcarteitembyuserComponent } from './detailcarteitembyuser.component';

describe('DetailcarteitembyuserComponent', () => {
  let component: DetailcarteitembyuserComponent;
  let fixture: ComponentFixture<DetailcarteitembyuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailcarteitembyuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailcarteitembyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
