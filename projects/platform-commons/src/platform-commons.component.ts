import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-platform-commons',
  template: `
    <p>
      platform-commons works!csdfsfsfsdf
    </p>

    <amexio-text-input [field-label]="'Name'" name ="name"
    [place-holder]="'Enter name'"
    [icon-feedback]="true">
</amexio-text-input>

  `,
  styles: []
})
export class PlatformCommonsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
