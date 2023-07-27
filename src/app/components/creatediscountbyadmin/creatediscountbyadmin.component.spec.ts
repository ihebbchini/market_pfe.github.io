import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatediscountbyadminComponent } from './creatediscountbyadmin.component';

describe('CreatediscountbyadminComponent', () => {
  let component: CreatediscountbyadminComponent;
  let fixture: ComponentFixture<CreatediscountbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatediscountbyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatediscountbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
