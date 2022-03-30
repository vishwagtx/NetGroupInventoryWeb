import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'oidc-client';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private administratorRole = 'Administrator';
  private currentUser: User | null = null;
  private signInSubject = new BehaviorSubject<User | null>(null);

  constructor(private router: Router) {}

  set user(value: User) {
    this.currentUser = value;
  }

  get user(): User {
    return this.currentUser as User;
  }

  signInUser(user: User) {
    this.signInSubject.next(user);
  }

  clearUser(): void {
    this.currentUser = null;
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  isAdministrator() {
    return (
      this.isAuthenticated() &&
      this.currentUser?.profile?.role === this.administratorRole
    );
  }

  signInPostActions$(): Observable<any> {
    return this.signInSubject.asObservable().pipe(
      tap((user) => {
        if (!user) return;

        if (user.profile?.role === this.administratorRole) {
          this.router.navigate(['admin']);
        }
      })
    );
  }
}
