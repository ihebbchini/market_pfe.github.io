import { TestBed } from '@angular/core/testing';

import { VisiteurapiproductService } from './visiteurapiproduct.service';

describe('VisiteurapiproductService', () => {
  let service: VisiteurapiproductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisiteurapiproductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
