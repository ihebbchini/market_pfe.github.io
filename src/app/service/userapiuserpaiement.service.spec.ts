import { TestBed } from '@angular/core/testing';

import { UserapiuserpaiementService } from './userapiuserpaiement.service';

describe('UserapiuserpaiementService', () => {
  let service: UserapiuserpaiementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserapiuserpaiementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
