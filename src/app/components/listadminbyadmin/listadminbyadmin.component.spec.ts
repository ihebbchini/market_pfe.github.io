import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadminbyadminComponent } from './listadminbyadmin.component';

describe('ListadminbyadminComponent', () => {
  let component: ListadminbyadminComponent;
  let fixture: ComponentFixture<ListadminbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadminbyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadminbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
