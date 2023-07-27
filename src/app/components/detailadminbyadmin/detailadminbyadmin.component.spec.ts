import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailadminbyadminComponent } from './detailadminbyadmin.component';

describe('DetailadminbyadminComponent', () => {
  let component: DetailadminbyadminComponent;
  let fixture: ComponentFixture<DetailadminbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailadminbyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailadminbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
