import { TestBed } from '@angular/core/testing';

import { UserapiuserService } from './userapiuser.service';

describe('UserapiuserService', () => {
  let service: UserapiuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserapiuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
