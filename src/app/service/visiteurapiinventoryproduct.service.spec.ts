import { TestBed } from '@angular/core/testing';

import { VisiteurapiinventoryproductService } from './visiteurapiinventoryproduct.service';

describe('VisiteurapiinventoryproductService', () => {
  let service: VisiteurapiinventoryproductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisiteurapiinventoryproductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
