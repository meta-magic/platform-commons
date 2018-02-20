import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PlatformCommmonsModule } from '../src';
import { DemoComponent } from './demo.component';
import { FormsModule } from '@angular/forms';
import { AmexioWidgetModule } from 'amexio-ng-extensions';

@NgModule({
  declarations: [DemoComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AmexioWidgetModule,
    PlatformCommmonsModule
  ],
  bootstrap: [DemoComponent]
})
export class DemoModule {}
