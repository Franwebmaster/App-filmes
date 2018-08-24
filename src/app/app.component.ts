import { Component } from '@angular/core';
import { Platform, Tabs } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SliderPage } from '../pages/slider/slider';
import { DataProvider } from '../providers/data/data';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html',
  providers: [
    DataProvider
  ]
})
export class MyApp {
  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, dataProvider: DataProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      let data = dataProvider.getConfigData();
      if (data == null) {
        this.rootPage = SliderPage;
        dataProvider.setConfigData(false);
      } else {
        this.rootPage = TabsPage;
      }
      console.log(data);

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
