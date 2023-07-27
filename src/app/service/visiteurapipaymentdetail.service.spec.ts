import { TestBed } from '@angular/core/testing';

import { VisiteurapipaymentdetailService } from './visiteurapipaymentdetail.service';

describe('VisiteurapipaymentdetailService', () => {
  let service: VisiteurapipaymentdetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisiteurapipaymentdetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
