/**
 * Created by pratik on 20/2/18.
 */
import { Injectable } from '@angular/core';
import { CanActivate, CanLoad } from '@angular/router';
import { CookieService } from '../cookie-service/cookie.service';
import { COOKIE_NAME } from '../http-interceptor/platform.http.interceptor';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class UserAuthenticGuard implements CanLoad {
  constructor(private cookieService: CookieService, private _route: Router) {}

  /*canActivate(){
   if(this.isLoggedIn())
     return true;
   else{
     window.alert('Invalid user ');
     return false;
   }
 }*/

  canLoad() {
    if (this.isLoggedIn()) return true;
    else {
      // window.alert('Invalid user');
      this._route.navigate(['login']);
      return false;
    }
  }

  isLoggedIn(): boolean {
    let isUserValid: boolean = false;
    let cookieData = this.cookieService.get(COOKIE_NAME);
    if (cookieData != '') {
      isUserValid = true;
    } else {
      isUserValid = false;
    }
    return isUserValid;
  }
}
