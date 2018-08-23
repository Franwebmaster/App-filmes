import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FilmeProvider } from '../../providers/filme/filme';

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
  providers: [
    FilmeProvider
  ]
})
export class FeedPage {

  //Array de filmes 
  public listaFilmes = new Array<any>();
	//Minhas Variaveis
	public nome:string = 'Fran Barros';

  //Meu JSON
  public objetoFeed = {
    nome: "Francisco Barros",
    data: "19 agosto",
    descricao: "Descrição sobre o filme",
    gostei: "12",
    qtd_comentarios: "4",
    hora_comentario: "11h"
  }

  array3 = []

  constructor(public navCtrl: NavController, public navParams: NavParams, private filmeProvider: FilmeProvider) {
  }


  ionViewDidLoad() {
    // this.alertaMeuNome();
    // this.somaDoisNumeros(1,3);
    this.filmeProvider.ultimosFilmes().subscribe(
        data=> {
          //Transformando o data em qualquer coisa
          const response = (data as any);
          const objetoRetorno = JSON.parse(response._body);
          this.listaFilmes = objetoRetorno.results;
          console.log(objetoRetorno);
        }, error => {
          console.log(error);
        }
      )
  }

}
