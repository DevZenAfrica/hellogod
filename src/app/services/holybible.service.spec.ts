import { TestBed } from '@angular/core/testing';

import { HolybibleService } from './holybible.service';

describe('HolybibleService', () => {
  let service: HolybibleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HolybibleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
