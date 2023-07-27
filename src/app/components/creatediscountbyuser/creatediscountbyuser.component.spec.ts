import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatediscountbyuserComponent } from './creatediscountbyuser.component';

describe('CreatediscountbyuserComponent', () => {
  let component: CreatediscountbyuserComponent;
  let fixture: ComponentFixture<CreatediscountbyuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatediscountbyuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatediscountbyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
