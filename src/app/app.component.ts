import { Component } from '@angular/core';
import { OpenidService } from './core/services/openid.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Inventory System';

  constructor(private opid: OpenidService) {}

  login(): void {
    this.opid.login();
  }
}
