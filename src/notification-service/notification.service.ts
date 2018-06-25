import { Injectable, OnInit } from '@angular/core';
/**
 * Created by dattaram on 21/6/18.
 */

@Injectable()
export class NotificationService implements OnInit {
  // Attribute for Custom Dialogue box
  showCustomDialogue: boolean = false;
  showDialogue: boolean = false;
  errorMsgData: any[];

  // Attribute for Simple Dialogue box
  dialogueMessage: string;
  title: string;

  // Attribute for Custom Notification
  // notificationData: any[] = [];
  notificationTitle: string;

  showNotification = false;

  //Attribut for notification
  notificationType: string;
  notificationData: any[] = [];
  notificationColor: string;
  ngOnInit() {}
  constructor() {}

  setNotificationData(type: string, data: any) {
    this.notificationType = type;
    this.notificationData = data;
  }
  showSuccessData(data: any) {
    this.notificationData = data;
  }
  showWarningData(type: string, data: any) {
    this.notificationData = data;
  }
  showInfoData(type: string, data: any) {
    this.notificationData = data;
  }
}
