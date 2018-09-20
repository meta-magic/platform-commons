"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
/**
 * Created by dattaram on 21/6/18.
 */
var NotificationService = (function () {
    function NotificationService() {
        this.notificationData = [];
        this.errorData = [];
        //Attribut for success notification
        this.successData = [];
        //Attribut for success notification
        this.warningData = [];
        //Attribut for success notification
        this.infoData = [];
    }
    NotificationService.prototype.ngOnInit = function () { };
    NotificationService.prototype.setNotificationData = function (type, data) {
        this.notificationType = type;
        this.notificationData = data;
    };
    NotificationService.prototype.showerrorData = function (title, data) {
        this.title = title;
        this.errorData = data;
        this.infoData = [];
        this.warningData = [];
        this.successData = [];
    };
    NotificationService.prototype.showSuccessData = function (data) {
        this.infoData = [];
        this.warningData = [];
        this.successData = data;
    };
    NotificationService.prototype.showWarningData = function (data) {
        this.successData = [];
        this.infoData = [];
        this.warningData = data;
    };
    NotificationService.prototype.showInfoData = function (data) {
        this.successData = [];
        this.warningData = [];
        this.infoData = data;
    };
    return NotificationService;
}());
NotificationService = __decorate([
    core_1.Injectable()
], NotificationService);
exports.NotificationService = NotificationService;
