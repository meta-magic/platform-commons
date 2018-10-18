import { Component } from '@angular/core';
import {RestCallService} from 'platform-commons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor( private _restCallService: RestCallService) {
  // this.localStorageService.set('sfsdfsd','rferfrerfe');
  }

  getData() {
    this._restCallService.getRestCall('assets/country.json').subscribe(
      res=>{
        console.log(res);
      }
    )
  }
}
