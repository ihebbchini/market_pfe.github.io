import { TestBed } from '@angular/core/testing';

import { UserapiproductService } from './userapiproduct.service';

describe('UserapiproductService', () => {
  let service: UserapiproductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserapiproductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
