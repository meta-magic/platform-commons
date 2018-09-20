import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LocalStorageService} from './local-storage-service/local.storage.service';
import {CommonHttpInterceptor} from './http-interceptor/platform.http.interceptor';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {CookieService} from './cookie-service/cookie.service';
import {MessagingService} from './module-comunicator/module.message.communicator';
import {LoaderService} from './loader-service/loader.service';
import {UserAuthenticGuard} from './route-guards/session.token.gaurd';
import {NotificationService} from './notification-service/notification.service';
import {RouterModule} from '@angular/router';


export * from './local-storage-service/local.storage.service';
export * from './http-interceptor/platform.http.interceptor';
export * from './notification-service/notification.service';
export * from './route-guards/session.token.gaurd';
export * from './cookie-service/cookie.service';
export * from './loader-service/loader.service';
export * from './module-comunicator/module.message.communicator';


@NgModule({
  imports: [
    CommonModule, HttpClientModule, RouterModule
  ],
})
export class PlatformCommmonsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: PlatformCommmonsModule,
      providers: [
        CookieService,
        MessagingService,
        LoaderService,
        LocalStorageService,
        UserAuthenticGuard,
        NotificationService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: CommonHttpInterceptor,
          multi: true
        }
      ]
    };
  }
}
