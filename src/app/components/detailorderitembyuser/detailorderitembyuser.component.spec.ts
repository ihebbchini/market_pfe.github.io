import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailorderitembyuserComponent } from './detailorderitembyuser.component';

describe('DetailorderitembyuserComponent', () => {
  let component: DetailorderitembyuserComponent;
  let fixture: ComponentFixture<DetailorderitembyuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailorderitembyuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailorderitembyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
