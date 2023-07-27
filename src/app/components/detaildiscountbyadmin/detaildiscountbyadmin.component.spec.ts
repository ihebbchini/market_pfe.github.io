import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaildiscountbyadminComponent } from './detaildiscountbyadmin.component';

describe('DetaildiscountbyadminComponent', () => {
  let component: DetaildiscountbyadminComponent;
  let fixture: ComponentFixture<DetaildiscountbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetaildiscountbyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetaildiscountbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
