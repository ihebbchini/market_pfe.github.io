import { TestBed } from '@angular/core/testing';

import { VisiteurapinotificationService } from './visiteurapinotification.service';

describe('VisiteurapinotificationService', () => {
  let service: VisiteurapinotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisiteurapinotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
