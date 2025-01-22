import { Injectable } from '@angular/core';
import { Data } from '@angular/router';
import { AppComponent } from '../../app.component';

@Injectable({
  providedIn: 'root'
})

export class ServiceSuccess {
  private data:Data;

  constructor() { }

  public setDataSuccess(dataReponse:Data): void {
    this.data = dataReponse;
    console.log('setDataSuccess');
    console.log(this.data);
  }

  public getDataSuccess(): Data {
    return this.data;
  }

  public setLoginOnSucess():void {
    //this.isLoggedIn = true;
  }


  public showStatutAlert(): Data {
    return this.data;
  }

}
