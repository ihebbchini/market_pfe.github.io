import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdiscountbyadminComponent } from './editdiscountbyadmin.component';

describe('EditdiscountbyadminComponent', () => {
  let component: EditdiscountbyadminComponent;
  let fixture: ComponentFixture<EditdiscountbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditdiscountbyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditdiscountbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
