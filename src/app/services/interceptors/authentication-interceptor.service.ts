import {
  HttpErrorResponse,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { AuthenticationService } from '../authentication/authentication.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationInterceptorService implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    const token = this.authenticationService.getToken();

    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.authenticationService.getToken()}`,
        },
      });
    }

    return next.handle(request).pipe(
      catchError((response: any) => {
        if (response.status === 401 || response.status === 404) {
          response.message = 'Usuário não autenticado';
          this.authenticationService.logout();
        }

        return throwError(response);
      })
    );
  }
}
