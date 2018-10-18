import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AmexioWidgetModule } from 'amexio-ng-extensions';
import {HttpClientModule} from '@angular/common/http';
import {PlatformCommonsModule} from "platform-commons";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AmexioWidgetModule,
    PlatformCommonsModule.forRoot(),
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
