/**
 * Created by pratik on 20/2/18.
 */
import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
  constructor() {}

  set(key: any, value: any) {
    if (key != null) {
      localStorage.setItem(key, JSON.stringify(value));
    } else {
      console.warn('Local Storage Service : Key cannot be empty');
    }
  }

  get(key: any): any {
    let data: any;
    if (key != null) {
      let stringData: any = localStorage.getItem(key);
      data = JSON.parse(stringData);
    }
    return data;
  }

  remove(key: string) {
    localStorage.removeItem(key);
  }
}
