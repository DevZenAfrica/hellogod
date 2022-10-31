import { TestBed } from '@angular/core/testing';

import { CanticleService } from './canticle.service';

describe('CanticleService', () => {
  let service: CanticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanticleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
