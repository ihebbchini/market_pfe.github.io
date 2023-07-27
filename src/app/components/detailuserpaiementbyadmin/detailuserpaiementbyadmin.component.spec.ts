import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailuserpaiementbyadminComponent } from './detailuserpaiementbyadmin.component';

describe('DetailuserpaiementbyadminComponent', () => {
  let component: DetailuserpaiementbyadminComponent;
  let fixture: ComponentFixture<DetailuserpaiementbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailuserpaiementbyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailuserpaiementbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
