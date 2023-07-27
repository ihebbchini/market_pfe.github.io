import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditmessagebyadminComponent } from './editmessagebyadmin.component';

describe('EditmessagebyadminComponent', () => {
  let component: EditmessagebyadminComponent;
  let fixture: ComponentFixture<EditmessagebyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditmessagebyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditmessagebyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
