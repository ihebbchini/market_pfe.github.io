import { TestBed } from '@angular/core/testing';

import { UserapipaymentdetailService } from './userapipaymentdetail.service';

describe('UserapipaymentdetailService', () => {
  let service: UserapipaymentdetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserapipaymentdetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
