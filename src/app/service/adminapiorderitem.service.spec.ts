import { TestBed } from '@angular/core/testing';

import { AdminapiorderitemService } from './adminapiorderitem.service';

describe('AdminapiorderitemService', () => {
  let service: AdminapiorderitemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminapiorderitemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
