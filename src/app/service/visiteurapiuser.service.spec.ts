import { TestBed } from '@angular/core/testing';

import { VisiteurapiuserService } from './visiteurapiuser.service';

describe('VisiteurapiuserService', () => {
  let service: VisiteurapiuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisiteurapiuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
