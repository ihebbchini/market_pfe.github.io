import { TestBed } from '@angular/core/testing';

import { VisiteurapiuserpaiementService } from './visiteurapiuserpaiement.service';

describe('VisiteurapiuserpaiementService', () => {
  let service: VisiteurapiuserpaiementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisiteurapiuserpaiementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
