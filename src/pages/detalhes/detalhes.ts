import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FilmeProvider } from '../../providers/filme/filme';

/**
 * Generated class for the DetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhes',
  templateUrl: 'detalhes.html',
  providers: [
    FilmeProvider
  ]
})
export class DetalhesPage {
  public filme;
  public filmeId;

  constructor(public navCtrl: NavController, public navParams: NavParams, public filmeProvider: FilmeProvider) {
  }

  ionViewDidEnter() {
    this.filmeId = this.navParams.get("id");
    this.filmeProvider.detalesFilmes(this.filmeId).subscribe(data=>{
      let retorno = (data as any)._body;
      this.filme = JSON.parse(retorno);
    }, error => {
      console.log(error);
    });
  }

}
