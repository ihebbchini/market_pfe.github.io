import { TestBed } from '@angular/core/testing';

import { VisiteurapiadminService } from './visiteurapiadmin.service';

describe('VisiteurapiadminService', () => {
  let service: VisiteurapiadminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisiteurapiadminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
