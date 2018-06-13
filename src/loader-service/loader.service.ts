import { Injectable } from '@angular/core';
@Injectable()
export class LoaderService {
  isLoading: boolean = false;
  constructor() {}

  showLoader() {
    this.isLoading = true;
    console.log('showLoader', this.isLoading);
  }

  hideLoader() {
    this.isLoading = false;
    console.log('hideLoader', this.isLoading);
  }
}
