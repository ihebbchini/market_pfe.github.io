import { TestBed } from '@angular/core/testing';

import { VisiteurapishoppingsessionService } from './visiteurapishoppingsession.service';

describe('VisiteurapishoppingsessionService', () => {
  let service: VisiteurapishoppingsessionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisiteurapishoppingsessionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
