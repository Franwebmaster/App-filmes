import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pet: string = "kittens";
  isAndroid: boolean = false;

  constructor(public navCtrl: NavController, platform: Platform) {
    this.isAndroid = platform.is('android');
  }

}
