import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailadminbyuserComponent } from './detailadminbyuser.component';

describe('DetailadminbyuserComponent', () => {
  let component: DetailadminbyuserComponent;
  let fixture: ComponentFixture<DetailadminbyuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailadminbyuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailadminbyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
