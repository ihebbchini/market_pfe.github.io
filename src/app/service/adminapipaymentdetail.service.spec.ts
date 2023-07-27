import { TestBed } from '@angular/core/testing';

import { AdminapipaymentdetailService } from './adminapipaymentdetail.service';

describe('AdminapipaymentdetailService', () => {
  let service: AdminapipaymentdetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminapipaymentdetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
