import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListuserprofilbyadminComponent } from './listuserprofilbyadmin.component';

describe('ListuserprofilbyadminComponent', () => {
  let component: ListuserprofilbyadminComponent;
  let fixture: ComponentFixture<ListuserprofilbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListuserprofilbyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListuserprofilbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
