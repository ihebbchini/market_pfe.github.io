import { TestBed } from '@angular/core/testing';

import { AdminapiadminService } from './adminapiadmin.service';

describe('AdminapiadminService', () => {
  let service: AdminapiadminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminapiadminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
