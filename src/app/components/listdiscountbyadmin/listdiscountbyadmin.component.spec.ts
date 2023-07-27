import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListdiscountbyadminComponent } from './listdiscountbyadmin.component';

describe('ListdiscountbyadminComponent', () => {
  let component: ListdiscountbyadminComponent;
  let fixture: ComponentFixture<ListdiscountbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListdiscountbyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListdiscountbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
