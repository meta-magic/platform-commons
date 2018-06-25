import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NoopInterceptor } from './http-interceptor/platform.http.interceptor';
import { CookieService } from './cookie-service/cookie.service';
import { EncryptionService } from './encryption-service/encryption.service';
import { LocalStorageService } from './local-storage-service/local.storage.service';
import { UserAuthenticGuard } from './route-guards/session.token.gaurd';
import { MessagingService } from './module-comunicator/module.message.communicator';
import { LoaderService } from './loader-service/loader.service';
import { NotificationService } from './notification-service/notification.service';
@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [
    CookieService,
    EncryptionService,
    MessagingService,
    LocalStorageService,
    LoaderService,
    UserAuthenticGuard,
    NotificationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NoopInterceptor,
      multi: true
    }
  ]
})
export class PlatformCommmonsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: PlatformCommmonsModule,
      providers: [
        CookieService,
        EncryptionService,
        MessagingService,
        LoaderService,
        LocalStorageService,
        UserAuthenticGuard,
        NotificationService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: NoopInterceptor,
          multi: true
        }
      ]
    };
  }
}

export * from './local-storage-service/local.storage.service';
export * from './notification-service/notification.service';
export * from './encryption-service/encryption.service';
export * from './route-guards/session.token.gaurd';
export * from './cookie-service/cookie.service';
export * from './loader-service/loader.service';
export * from './module-comunicator/module.message.communicator';
