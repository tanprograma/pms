import { TestBed } from '@angular/core/testing';

import { TogglemainService } from './togglemain.service';

describe('TogglemainService', () => {
  let service: TogglemainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TogglemainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
