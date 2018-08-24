import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the FilmeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FilmeProvider {

	//URL base da API
	private baseUrlAPI = "https://api.themoviedb.org/3";

  constructor(public http: Http) {
    console.log('Hello FilmeProvider Provider');
  }

  //Função que chama aa URL onde pegar os filmes
  ultimosFilmes(){
  	return this.http.get(this.baseUrlAPI + "/movie/popular?api_key=bb087c7f8538a11e3a56739e6609c1eb");
  }

  detalesFilmes(filmeId){
  	return this.http.get(this.baseUrlAPI + `/movie/${filmeId}?api_key=bb087c7f8538a11e3a56739e6609c1eb`);
  }

}
