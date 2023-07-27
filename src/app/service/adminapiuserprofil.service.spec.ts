import { TestBed } from '@angular/core/testing';

import { AdminapiuserprofilService } from './adminapiuserprofil.service';

describe('AdminapiuserprofilService', () => {
  let service: AdminapiuserprofilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminapiuserprofilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
