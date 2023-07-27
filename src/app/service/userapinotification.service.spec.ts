import { TestBed } from '@angular/core/testing';

import { UserapinotificationService } from './userapinotification.service';

describe('UserapinotificationService', () => {
  let service: UserapinotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserapinotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
