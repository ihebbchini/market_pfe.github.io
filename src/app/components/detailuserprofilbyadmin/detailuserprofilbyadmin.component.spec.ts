import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailuserprofilbyadminComponent } from './detailuserprofilbyadmin.component';

describe('DetailuserprofilbyadminComponent', () => {
  let component: DetailuserprofilbyadminComponent;
  let fixture: ComponentFixture<DetailuserprofilbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailuserprofilbyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailuserprofilbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
