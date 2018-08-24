import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { FilmeProvider } from '../../providers/filme/filme';
import { DetalhesPage } from '../detalhes/detalhes';

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
  public loader;
  public refresh;
  public isRefreshing: boolean = false;

  //Meu JSON
  public objetoFeed = {
    nome: "Francisco Barros",
    data: "19 agosto",
    descricao: "Descrição sobre o filme",
    gostei: "12",
    qtd_comentarios: "4",
    hora_comentario: "11h"
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private filmeProvider: FilmeProvider, public loadingCtrl: LoadingController) {
  }

  carregaLoad() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando filmes..."
    });
    this.loader.present();
  }

  fechaLoad(){
    this.loader.dismiss();
  }

  doRefresh(refresher) {
    this.refresh = refresher;
    this.isRefreshing = true;
    this.carregaFilmes();
  }

  ionViewDidEnter() {
    this.carregaFilmes();
  }

  abrirDetalhes(filme) {
    console.log(filme)
    this.navCtrl.push(DetalhesPage, {id: filme.id});
  }

  carregaFilmes(){
    this.carregaLoad();
    this.filmeProvider.ultimosFilmes().subscribe(
        data=> {
          //Transformando o data em qualquer coisa
          const response = (data as any);
          const objetoRetorno = JSON.parse(response._body);
          this.listaFilmes = objetoRetorno.results;
          console.log(objetoRetorno);

          this.fechaLoad();
          if (this.isRefreshing) {
            this.refresh.complete();
            this.isRefreshing = false;
          }
        }, error => {
          console.log(error);
          this.fechaLoad();
          if (this.isRefreshing) {
            this.refresh.complete();
            this.isRefreshing = false;
          }
        }
      )
  }

}
