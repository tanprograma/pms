import { TestBed } from '@angular/core/testing';

import { DispenseddataService } from './dispenseddata.service';

describe('DispenseddataService', () => {
  let service: DispenseddataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DispenseddataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
