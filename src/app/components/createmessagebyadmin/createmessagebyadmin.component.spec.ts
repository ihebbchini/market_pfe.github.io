import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatemessagebyadminComponent } from './createmessagebyadmin.component';

describe('CreatemessagebyadminComponent', () => {
  let component: CreatemessagebyadminComponent;
  let fixture: ComponentFixture<CreatemessagebyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatemessagebyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatemessagebyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
