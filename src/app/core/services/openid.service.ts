import { Injectable } from '@angular/core';
import {
  UserManager,
  UserManagerSettings,
  WebStorageStateStore,
} from 'oidc-client';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class OpenidService {
  private manager: UserManager;

  constructor(private authService: AuthService) {
    const hostUrl = environment.appURL;

    const settings = {
      client_id: environment.openId.client_id,
      authority: environment.openId.authority,
      redirect_uri: `${hostUrl}`,
      response_type: 'id_token token',
      scope: 'openid profile app_api',
      post_logout_redirect_uri: `${hostUrl}`,
      automaticSilentRenew: true,
      silent_redirect_uri: `${hostUrl}/silent_renew`,
      includeIdTokenInSilentRenew: true,
      monitorSession: false,
      userStore: new WebStorageStateStore({
        store: localStorage,
      }),
    } as UserManagerSettings;
    this.manager = new UserManager(settings);
  }

  login(): void {
    this.manager.signinRedirect();
  }

  onInit(): void {
    this.manager.signinRedirectCallback().then((user) => {
      this.authService.signInUser(user);
      this.authService.user = user;
    });

    this.manager.getUser().then((user) => {
      if (user) this.authService.user = user;
    });
  }

  logout(): void {
    this.authService.clearUser();
    this.manager.signoutRedirect();
  }
}
