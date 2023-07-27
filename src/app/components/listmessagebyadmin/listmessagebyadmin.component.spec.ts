import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListmessagebyadminComponent } from './listmessagebyadmin.component';

describe('ListmessagebyadminComponent', () => {
  let component: ListmessagebyadminComponent;
  let fixture: ComponentFixture<ListmessagebyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListmessagebyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListmessagebyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
