import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NoopInterceptor} from './http-interceptor/platform.http.interceptor';
import {CookieService} from "./cookie-service/cookie.service";
import {EncryptionService} from "./encryption-service/encryption.service";
import {LocalStorageService} from "./local-storage-service/local.storage.service";
import {UserAuthenticGuard} from "./route-guards/session.token.gaurd";


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    CookieService,
    EncryptionService,
    LocalStorageService,
    UserAuthenticGuard,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: NoopInterceptor,
    multi: true,
  }]
})
export class PlatformCommmonsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: PlatformCommmonsModule,
      providers: [
        CookieService,
        EncryptionService,
        LocalStorageService,
        UserAuthenticGuard,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: NoopInterceptor,
          multi: true,
        }
      ]
    };
  }
}

export * from './local-storage-service/local.storage.service';
export * from './encryption-service/encryption.service';
export * from './route-guards/session.token.gaurd';
export * from './cookie-service/cookie.service';
