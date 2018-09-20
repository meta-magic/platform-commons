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
var LocalStorageService = (function () {
    function LocalStorageService() {
    }
    LocalStorageService.prototype.set = function (key, value) {
        if (key != null) {
            localStorage.setItem(key, JSON.stringify(value));
        }
        else {
            console.warn('Local Storage Service : Key cannot be empty');
        }
    };
    LocalStorageService.prototype.get = function (key) {
        var data;
        if (key != null) {
            var stringData = localStorage.getItem(key);
            data = JSON.parse(stringData);
        }
        return data;
    };
    LocalStorageService.prototype.remove = function (key) {
        localStorage.removeItem(key);
    };
    return LocalStorageService;
}());
LocalStorageService = __decorate([
    core_1.Injectable()
], LocalStorageService);
exports.LocalStorageService = LocalStorageService;
