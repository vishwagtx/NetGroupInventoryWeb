import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './core/services/auth.service';
import { OpenidService } from './core/services/openid.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private opid: OpenidService, private authService: AuthService) {}

  private sub: Subscription | null = null;

  title = 'Inventory System';

  ngOnInit(): void {
    this.opid.onInit();
    this.sub = this.authService.signInPostActions$().subscribe();
  }
  ngOnDestroy(): void {
    if (this.sub) this.sub.unsubscribe();
  }
}
