import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpResponse,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../../core/services/auth.service';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let newReq = this.authService.isAuthenticated()
      ? req.clone({
          setHeaders: {
            Authorization: `Bearer ${this.authService.user.access_token}`,
          },
        })
      : req.clone();

    return next.handle(newReq);
  }
}
