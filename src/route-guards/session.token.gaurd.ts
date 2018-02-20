/**
 * Created by pratik on 20/2/18.
 */
import { Injectable } from '@angular/core';
import {CanActivate} from "@angular/router";
import {CookieService} from "../cookie-service/cookie.service";
import {COOKIE_NAME} from "../http-interceptor/platform.http.interceptor";

@Injectable()
export class UserAuthenticGuard implements CanActivate{

 constructor(private cookieService : CookieService) { }

 canActivate(){
   if(this.isLoggedIn())
     return true;
   else{
     window.alert('Invalid user ');
     return false;
   }
 }

 isLoggedIn() : boolean{
   let isUserValid : boolean = false;
   let cookieData = this.cookieService.get(COOKIE_NAME);
   if(cookieData != ""){
     // make http call to verify token?
     isUserValid = true;
   }
   else{
     isUserValid = false;
   }
   return isUserValid;
 }
}
