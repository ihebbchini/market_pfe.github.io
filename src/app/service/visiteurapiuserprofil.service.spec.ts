import { TestBed } from '@angular/core/testing';

import { VisiteurapiuserprofilService } from './visiteurapiuserprofil.service';

describe('VisiteurapiuserprofilService', () => {
  let service: VisiteurapiuserprofilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisiteurapiuserprofilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
