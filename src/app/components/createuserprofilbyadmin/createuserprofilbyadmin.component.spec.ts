import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateuserprofilbyadminComponent } from './createuserprofilbyadmin.component';

describe('CreateuserprofilbyadminComponent', () => {
  let component: CreateuserprofilbyadminComponent;
  let fixture: ComponentFixture<CreateuserprofilbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateuserprofilbyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateuserprofilbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
