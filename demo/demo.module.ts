import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PlatformCommmonsModule } from '../src';
import { DemoComponent } from './demo.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AmexioWidgetModule } from 'amexio-ng-extensions';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../src/app/project/login/auth.login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  declarations: [DemoComponent],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AmexioWidgetModule,
    PlatformCommmonsModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  bootstrap: [DemoComponent]
})
export class DemoModule {}
