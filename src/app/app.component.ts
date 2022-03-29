import { Component, OnInit } from '@angular/core';
import { OpenidService } from './core/services/openid.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private opid: OpenidService) {}

  ngOnInit(): void {
    this.opid.onInit();
  }

  title = 'Inventory System';
}
