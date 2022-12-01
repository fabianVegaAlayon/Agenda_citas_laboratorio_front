import { TestBed } from '@angular/core/testing';

import { AffiliateService } from 'src/app/services/affiliate/affiliate.service';

describe('AfiliateService', () => {
  let service: AffiliateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AffiliateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
