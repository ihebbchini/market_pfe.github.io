import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdituserprofilbyadminComponent } from './edituserprofilbyadmin.component';

describe('EdituserprofilbyadminComponent', () => {
  let component: EdituserprofilbyadminComponent;
  let fixture: ComponentFixture<EdituserprofilbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdituserprofilbyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdituserprofilbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
