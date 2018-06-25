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
  notificationData: any[] = [];
  notificationTitle: string;

  showNotification = false;
  ngOnInit() {}
  constructor() {}
  setDialogueData(show: boolean, message: string, title: string) {
    this.showDialogue = show;
    this.title = title;
    this.dialogueMessage = message;
  }

  setCustomDialogueData(show: boolean, data: any, title: string) {
    this.showCustomDialogue = show;
    this.errorMsgData = data;
    this.title = title;
  }

  setCustomNotificationData(title: string, data: any) {
    this.notificationTitle = title;
    this.notificationData = data;
  }

  setNotificationData(show: boolean, data: any) {
    this.showNotification = show;
    this.notificationData = data;
  }
}
