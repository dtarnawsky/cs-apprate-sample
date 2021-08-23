import { Component } from '@angular/core';
import { AppRate } from '@ionic-enterprise/app-rate/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private appRate: AppRate) { }

  public rate(): void {
    // or, override the whole preferences object
    this.appRate.setPreferences({
      usesUntilPrompt: 3,
      storeAppURL: {
        ios: '<app_id>',
        android: 'market://details?id=<package_name>',
        windows: 'ms-windows-store://review/?ProductId=<store_id>'
      }
    });

    this.appRate.promptForRating(true);
  }

}
