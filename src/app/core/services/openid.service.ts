import { Injectable } from '@angular/core';
import {
  UserManager,
  UserManagerSettings,
  WebStorageStateStore,
} from 'oidc-client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OpenidService {
  private userManager: UserManager;

  constructor() {
    const hostUrl = environment.appURL;

    const settings = {
      client_id: environment.openId.client_id,
      authority: environment.openId.authority,
      redirect_uri: `${hostUrl}`,
      response_type: 'id_token token',
      scope: 'openid profile i_api',
      post_logout_redirect_uri: `${hostUrl}`,
      automaticSilentRenew: true,
      silent_redirect_uri: `${hostUrl}/silent_renew`,
      includeIdTokenInSilentRenew: true,
      monitorSession: false,
      userStore: new WebStorageStateStore({
        store: localStorage,
      }),
    } as UserManagerSettings;
    this.userManager = new UserManager(settings);
  }

  login(): void {
    this.userManager.signinRedirect();
  }
}
