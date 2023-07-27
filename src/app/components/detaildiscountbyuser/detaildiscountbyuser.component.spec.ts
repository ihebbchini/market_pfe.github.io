import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaildiscountbyuserComponent } from './detaildiscountbyuser.component';

describe('DetaildiscountbyuserComponent', () => {
  let component: DetaildiscountbyuserComponent;
  let fixture: ComponentFixture<DetaildiscountbyuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetaildiscountbyuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetaildiscountbyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
