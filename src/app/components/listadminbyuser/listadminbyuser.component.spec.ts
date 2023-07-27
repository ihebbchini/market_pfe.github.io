import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadminbyuserComponent } from './listadminbyuser.component';

describe('ListadminbyuserComponent', () => {
  let component: ListadminbyuserComponent;
  let fixture: ComponentFixture<ListadminbyuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadminbyuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadminbyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
