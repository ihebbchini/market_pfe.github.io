import { TestBed } from '@angular/core/testing';

import { AdminapiproductService } from './adminapiproduct.service';

describe('AdminapiproductService', () => {
  let service: AdminapiproductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminapiproductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
