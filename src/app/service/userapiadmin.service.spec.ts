import { TestBed } from '@angular/core/testing';

import { UserapiadminService } from './userapiadmin.service';

describe('UserapiadminService', () => {
  let service: UserapiadminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserapiadminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
