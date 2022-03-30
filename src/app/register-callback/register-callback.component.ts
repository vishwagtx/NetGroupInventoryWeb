import { Component, OnInit } from '@angular/core';
import { OpenidService } from '../core/services/openid.service';

@Component({
  selector: 'app-register-callback',
  templateUrl: './register-callback.component.html',
  styleUrls: ['./register-callback.component.scss'],
})
export class RegisterCallbackComponent implements OnInit {
  constructor(private opid: OpenidService) {}

  ngOnInit(): void {
    this.opid.login();
  }
}
