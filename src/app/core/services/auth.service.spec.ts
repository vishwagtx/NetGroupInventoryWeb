import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { User, UserSettings } from 'oidc-client';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('signInUser', () => {
    it('should be return passed user', () => {
      const settings = {
        access_token: 'tttttttttttttttt',
      } as UserSettings;

      const user = new User(settings);
      service.signInUser(user);

      service.signInPostActions$().subscribe((u: User) => {
        expect(u.access_token).toEqual(user.access_token);
      });
    });
  });
});
