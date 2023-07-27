import { TestBed } from '@angular/core/testing';

import { AdminapidiscountService } from './adminapidiscount.service';

describe('AdminapidiscountService', () => {
  let service: AdminapidiscountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminapidiscountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
