import { Injectable } from '@angular/core';
import { User } from 'oidc-client';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUser: User | null = null;

  constructor() {}

  set user(value: User) {
    this.currentUser = value;
  }

  get user(): User {
    return this.currentUser as User;
  }

  clearUser(): void {
    this.currentUser = null;
  }

  isAuthenticated() {
    return !!this.currentUser;
  }
}
