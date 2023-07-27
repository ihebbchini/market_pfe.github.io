import { TestBed } from '@angular/core/testing';

import { UserapiorderdetailService } from './userapiorderdetail.service';

describe('UserapiorderdetailService', () => {
  let service: UserapiorderdetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserapiorderdetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
