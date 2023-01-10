import { TestBed } from '@angular/core/testing';

import { DispensedtableService } from './dispensedtable.service';

describe('DispensedtableService', () => {
  let service: DispensedtableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DispensedtableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
