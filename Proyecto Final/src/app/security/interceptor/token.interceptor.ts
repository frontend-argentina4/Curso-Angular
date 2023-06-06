import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthenticationService} from "../../services/security/authentication.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authService: AuthenticationService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (this.authService.isLoggedIn()){
      request = request.clone({
        setHeaders: {
          Authorization: this.authService.token ? this.authService.token : ''
        }
      })
    }

    return next.handle(request);
  }
}
