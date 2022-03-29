import { TestBed } from '@angular/core/testing';

import { OpenidService } from './openid.service';

describe('OpenidService', () => {
  let service: OpenidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
