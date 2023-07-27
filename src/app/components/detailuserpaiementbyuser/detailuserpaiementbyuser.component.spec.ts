import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailuserpaiementbyuserComponent } from './detailuserpaiementbyuser.component';

describe('DetailuserpaiementbyuserComponent', () => {
  let component: DetailuserpaiementbyuserComponent;
  let fixture: ComponentFixture<DetailuserpaiementbyuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailuserpaiementbyuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailuserpaiementbyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
