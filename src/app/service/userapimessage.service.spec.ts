import { TestBed } from '@angular/core/testing';

import { UserapimessageService } from './userapimessage.service';

describe('UserapimessageService', () => {
  let service: UserapimessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserapimessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
