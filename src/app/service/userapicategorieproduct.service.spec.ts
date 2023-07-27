import { TestBed } from '@angular/core/testing';

import { UserapicategorieproductService } from './userapicategorieproduct.service';

describe('UserapicategorieproductService', () => {
  let service: UserapicategorieproductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserapicategorieproductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
