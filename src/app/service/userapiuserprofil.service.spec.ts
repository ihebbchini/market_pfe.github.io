import { TestBed } from '@angular/core/testing';

import { UserapiuserprofilService } from './userapiuserprofil.service';

describe('UserapiuserprofilService', () => {
  let service: UserapiuserprofilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserapiuserprofilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
