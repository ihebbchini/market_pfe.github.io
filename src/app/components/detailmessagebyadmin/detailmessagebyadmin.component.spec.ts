import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailmessagebyadminComponent } from './detailmessagebyadmin.component';

describe('DetailmessagebyadminComponent', () => {
  let component: DetailmessagebyadminComponent;
  let fixture: ComponentFixture<DetailmessagebyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailmessagebyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailmessagebyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
