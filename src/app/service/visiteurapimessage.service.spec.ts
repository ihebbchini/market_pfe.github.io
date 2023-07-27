import { TestBed } from '@angular/core/testing';

import { VisiteurapimessageService } from './visiteurapimessage.service';

describe('VisiteurapimessageService', () => {
  let service: VisiteurapimessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisiteurapimessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
