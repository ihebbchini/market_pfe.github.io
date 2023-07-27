import { TestBed } from '@angular/core/testing';

import { AdminapiinventoryproductService } from './adminapiinventoryproduct.service';

describe('AdminapiinventoryproductService', () => {
  let service: AdminapiinventoryproductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminapiinventoryproductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
