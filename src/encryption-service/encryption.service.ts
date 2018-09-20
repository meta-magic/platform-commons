/**
 * Created by pratik on 20/2/18.
 */
import { Injectable } from '@angular/core';
import { CookieService } from '../cookie-service/cookie.service';
import { COOKIE_NAME } from '../http-interceptor/platform.http.interceptor';

@Injectable()
export class EncryptionService {
  constructor(private cookieService: CookieService) {}

  encryptObject(data: any): any {
    /*  let ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data),this.cookieService.get(COOKIE_NAME));
   return ciphertext;*/
    return data;
  }

  decryptObject(cipher: any): any {
    /*  let bytes  = CryptoJS.AES.decrypt(cipher, this.cookieService.get(COOKIE_NAME));
   let decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
   return decryptedData;*/

    return cipher;
  }
}
