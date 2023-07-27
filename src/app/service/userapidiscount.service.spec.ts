import { TestBed } from '@angular/core/testing';

import { UserapidiscountService } from './userapidiscount.service';

describe('UserapidiscountService', () => {
  let service: UserapidiscountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserapidiscountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
