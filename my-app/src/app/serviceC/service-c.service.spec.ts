import { TestBed } from '@angular/core/testing';

import { CService } from './service-c.service';

describe('ServiceCService', () => {
  let service: CService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
