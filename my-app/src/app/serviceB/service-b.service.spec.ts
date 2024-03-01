import { TestBed } from '@angular/core/testing';

import { BService } from './service-b.service';

describe('ServiceBService', () => {
  let service: BService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
