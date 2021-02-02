import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {LocalStorageService} from '../utils/local-storage.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor(
    private localService: LocalStorageService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken = this.localService.accessToken;
    if (accessToken) {
      request = request.clone({ headers: request.headers.set('Authorization', `Bearer ${accessToken}`) });
    }

    const ignore =
        typeof request.body === 'undefined'
        || request.body === null
        || request.body.toString() === '[object FormData]';

    if (ignore) {
      return next.handle(request);
    }

    if (!request.headers.has('Content-Type')) {
        request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
    }

      return next.handle(request);
  }
}
