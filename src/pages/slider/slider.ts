import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { TabsPage} from '../tabs/tabs';



/**
 * Generated class for the SliderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-slider',
  templateUrl: 'slider.html',
})
export class SliderPage {

  @ViewChild(Slides) slides: Slides;

 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToSlide(){
    this.slides.slideNext(500);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SliderPage');
  }

  //Minha Function
  public irParaTabs(): void{
  	this.navCtrl.push(TabsPage);
  }

}
