import { TestBed } from '@angular/core/testing';

import { VisiteurapiorderitemService } from './visiteurapiorderitem.service';

describe('VisiteurapiorderitemService', () => {
  let service: VisiteurapiorderitemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisiteurapiorderitemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
