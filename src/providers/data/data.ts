import { Injectable } from '@angular/core';

let data_key_name = "Data";

/*
  Generated class for the ConfigProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

    public data = {
        showSlide: false,
        name: "",
        username: ""
    }

  constructor() {
    
  }

  //Recupera os dados do  localstorage
  getConfigData(): any {
    return localStorage.getItem(data_key_name);
  }

  //Grava os dados do  localstorage
  setConfigData(showSlide?: boolean, name?: string, username?: string){
    let data = {
        showSlide: false,
        name: "",
        username: ""
    };

    if(showSlide) {
        data.showSlide = showSlide;
    }

    if(name) {
        data.name = name;
    }

    if(username) {
        data.username = username;
    }

    localStorage.setItem(data_key_name, JSON.stringify(data));
  }

}
