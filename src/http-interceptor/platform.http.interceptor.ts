/**
 * Created by pratik on 19/2/18.
 */
import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {CookieService} from "../cookie-service/cookie.service";


const TOKENKEY = 'tokenid';
const COOKIE_NAME = 'tokenid';

@Injectable()
export class NoopInterceptor implements HttpInterceptor {
  constructor(private cookieService : CookieService){

  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const changedReq = req.clone({headers : req.headers.set(TOKENKEY, this.getTokenCookieValue())});
    return next.handle(changedReq);
  }

  getTokenCookieValue(): string {
    const allCookie = this.cookieService.get(COOKIE_NAME);
    return allCookie;
  }
}
