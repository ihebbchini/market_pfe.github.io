import { TestBed } from '@angular/core/testing';

import { VisiteurapidiscountService } from './visiteurapidiscount.service';

describe('VisiteurapidiscountService', () => {
  let service: VisiteurapidiscountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisiteurapidiscountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
