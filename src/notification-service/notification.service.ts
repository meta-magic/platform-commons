import { Injectable, OnInit } from '@angular/core';
/**
 * Created by dattaram on 21/6/18.
 */

@Injectable()
export class NotificationService implements OnInit {
  //Attribut for notification
  notificationType: string;
  notificationData: any[] = [];
  notificationColor: string;

  //Attribut for error notification
  title: string;
  errorData: any[] = [];

  //Attribut for success notification
  successData: any[] = [];

  //Attribut for success notification
  warningData: any[] = [];

  //Attribut for success notification
  infoData: any[] = [];
  ngOnInit() {}
  constructor() {}

  setNotificationData(type: string, data: any) {
    this.notificationType = type;
    this.notificationData = data;
  }

  showerrorData(title: string, data: any) {
    this.title = title;
    this.errorData = data;
    this.infoData = [];
    this.warningData = [];
    this.successData = [];
  }
  showSuccessData(data: any) {
    this.infoData = [];
    this.warningData = [];
    this.successData = data;
  }
  showWarningData(data: any) {
    this.successData = [];
    this.infoData = [];
    this.warningData = data;
  }
  showInfoData(data: any) {
    this.successData = [];
    this.warningData = [];
    this.infoData = data;
  }
}
