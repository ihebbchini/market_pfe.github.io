import { TestBed } from '@angular/core/testing';

import { VisiteurapicarteitemService } from './visiteurapicarteitem.service';

describe('VisiteurapicarteitemService', () => {
  let service: VisiteurapicarteitemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisiteurapicarteitemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
