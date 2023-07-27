import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecategorieproductbyuserComponent } from './createcategorieproductbyuser.component';

describe('CreatecategorieproductbyuserComponent', () => {
  let component: CreatecategorieproductbyuserComponent;
  let fixture: ComponentFixture<CreatecategorieproductbyuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatecategorieproductbyuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatecategorieproductbyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
