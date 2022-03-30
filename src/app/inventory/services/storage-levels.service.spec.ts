import { TestBed } from '@angular/core/testing';

import { StorageLevelsService } from './storage-levels.service';

describe('StorageLevelsService', () => {
  let service: StorageLevelsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageLevelsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
