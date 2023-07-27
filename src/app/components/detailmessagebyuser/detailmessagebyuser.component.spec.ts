import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailmessagebyuserComponent } from './detailmessagebyuser.component';

describe('DetailmessagebyuserComponent', () => {
  let component: DetailmessagebyuserComponent;
  let fixture: ComponentFixture<DetailmessagebyuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailmessagebyuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailmessagebyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
