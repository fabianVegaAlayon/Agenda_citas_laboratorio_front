import { TestBed } from '@angular/core/testing';

import { AfiliateService } from './afiliate.service';

describe('AfiliateService', () => {
  let service: AfiliateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AfiliateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
