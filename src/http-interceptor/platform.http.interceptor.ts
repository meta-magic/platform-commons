/**
 * Created by pratik on 19/2/18.
 */
import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {CookieService} from 'ngx-cookie-service';

const TOKENKEY = 'tokenid';
const COOKIE_NAME = 'tokenid';

@Injectable()
export class NoopInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // const changedReq = req.clone({headers: req.headers.set('My-Header', 'MyHeaderValue')});
    const changedReq = req.clone({headers : req.headers.set(TOKENKEY, this.getTokenObject())});
    return next.handle(changedReq);
  }

  getTokenObject(): string {
    const cookieService = new CookieService(document);
    const allCookie = cookieService.get('tokenid');
    return allCookie;
  }
}
