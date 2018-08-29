/**
 * Created by pratik on 20/2/18.
 */
import { Injectable } from '@angular/core';
import { EncryptionService } from '../encryption-service/encryption.service';

@Injectable()
export class LocalStorageService {
  constructor(private encryptionService: EncryptionService) {}

  set(key: any, value: any) {
    if (key != null) {
      //Encrypt before storing
      localStorage.setItem(
        key,
        value === undefined ? null : this.encryptionService.encryptObject(value)
      );
    } else {
      console.warn('Local Storage Service : Key cannot be empty');
    }
  }

  get(key: any): any {
    let data: any;
    if (key != null) {
      let stringData = localStorage.getItem(key);
      //remove from local storage
      // localStorage.removeItem(key);
      if (stringData != null) {
        data = this.encryptionService.decryptObject(stringData);
      } else {
        console.warn('No Item found in local storage');
      }
    } else {
      console.warn('Local Storage Service : Key cannot be empty');
    }
    return data;
  }
}
