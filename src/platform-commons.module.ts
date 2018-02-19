import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NoopInterceptor} from './http-interceptor/platform.htt.interceptor';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [{
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
        {
          provide: HTTP_INTERCEPTORS,
          useClass: NoopInterceptor,
          multi: true,
        }
      ]
    };
  }
}
