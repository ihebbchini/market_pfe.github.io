import { TestBed } from '@angular/core/testing';

import { AdminapiorderdetailService } from './adminapiorderdetail.service';

describe('AdminapiorderdetailService', () => {
  let service: AdminapiorderdetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminapiorderdetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
