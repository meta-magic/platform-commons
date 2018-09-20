"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
/**
 * Created by pratik on 20/2/18.
 */
var core_1 = require("@angular/core");
var platform_http_interceptor_1 = require("../http-interceptor/platform.http.interceptor");
var UserAuthenticGuard = (function () {
    function UserAuthenticGuard(cookieService, _route) {
        this.cookieService = cookieService;
        this._route = _route;
    }
    /*canActivate(){
     if(this.isLoggedIn())
       return true;
     else{
       window.alert('Invalid user ');
       return false;
     }
   }*/
    UserAuthenticGuard.prototype.canLoad = function () {
        if (this.isLoggedIn())
            return true;
        else {
            // window.alert('Invalid user');
            this._route.navigate(['login']);
            return false;
        }
    };
    UserAuthenticGuard.prototype.isLoggedIn = function () {
        var isUserValid = false;
        var cookieData = this.cookieService.get(platform_http_interceptor_1.COOKIE_NAME);
        if (cookieData != '') {
            isUserValid = true;
        }
        else {
            isUserValid = false;
        }
        return isUserValid;
    };
    return UserAuthenticGuard;
}());
UserAuthenticGuard = __decorate([
    core_1.Injectable()
], UserAuthenticGuard);
exports.UserAuthenticGuard = UserAuthenticGuard;
