import { TestBed } from '@angular/core/testing';

import { VisiteurapiorderdetailService } from './visiteurapiorderdetail.service';

describe('VisiteurapiorderdetailService', () => {
  let service: VisiteurapiorderdetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisiteurapiorderdetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
