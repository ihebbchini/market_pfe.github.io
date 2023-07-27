import { TestBed } from '@angular/core/testing';

import { AdminapiuserpaiementService } from './adminapiuserpaiement.service';

describe('AdminapiuserpaiementService', () => {
  let service: AdminapiuserpaiementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminapiuserpaiementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
