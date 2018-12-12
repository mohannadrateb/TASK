import { TestBed } from '@angular/core/testing';

import { LognService } from './logn.service';

describe('LognService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LognService = TestBed.get(LognService);
    expect(service).toBeTruthy();
  });
});
