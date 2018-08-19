import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
	//Minhas Variaveis
	public nome:string = 'Fran Barros';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  //Minhas Functions
  public alertaMeuNome(): void {
  	alert('Francisco');
  }

  public somaDoisNumeros(x,y): number {
  	var result = x + y;
  	console.log(result);
  	return result;
  }

  ionViewDidLoad() {
    // this.alertaMeuNome();
    // this.somaDoisNumeros(1,3);
  }

}
