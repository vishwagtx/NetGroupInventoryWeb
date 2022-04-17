import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from '../services/auth.service';
import { OpenidService } from '../services/openid.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private opid: OpenidService, public authService: AuthService) {}

  ngOnInit(): void {}

  login(): void {
    this.opid.login();
  }

  logout(): void {
    this.opid.logout();
  }

  register(): void {
    const registerURL = `${environment.openId.authority}account/register?returnUrl=${environment.appURL}/registerCallback`;
    document.location.href = registerURL;
  }
}
