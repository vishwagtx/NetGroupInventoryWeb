import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from './auth.service';

import { OpenidService } from './openid.service';

describe('OpenidService', () => {
  let service: OpenidService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [AuthService],
    });
    service = TestBed.inject(OpenidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
