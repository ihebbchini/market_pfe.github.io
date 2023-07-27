import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailuserprofilbyuserComponent } from './detailuserprofilbyuser.component';

describe('DetailuserprofilbyuserComponent', () => {
  let component: DetailuserprofilbyuserComponent;
  let fixture: ComponentFixture<DetailuserprofilbyuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailuserprofilbyuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailuserprofilbyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
