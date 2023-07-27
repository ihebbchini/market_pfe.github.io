import { TestBed } from '@angular/core/testing';

import { VisiteurapicategorieproductService } from './visiteurapicategorieproduct.service';

describe('VisiteurapicategorieproductService', () => {
  let service: VisiteurapicategorieproductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisiteurapicategorieproductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
