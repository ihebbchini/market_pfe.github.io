import { TestBed } from '@angular/core/testing';

import { AdminapicategorieproductService } from './adminapicategorieproduct.service';

describe('AdminapicategorieproductService', () => {
  let service: AdminapicategorieproductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminapicategorieproductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
