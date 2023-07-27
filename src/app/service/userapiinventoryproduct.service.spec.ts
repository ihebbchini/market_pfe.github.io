import { TestBed } from '@angular/core/testing';

import { UserapiinventoryproductService } from './userapiinventoryproduct.service';

describe('UserapiinventoryproductService', () => {
  let service: UserapiinventoryproductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserapiinventoryproductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
