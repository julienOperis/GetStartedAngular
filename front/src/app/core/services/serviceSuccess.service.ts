import { inject, Injectable } from '@angular/core';
import { Data } from '@angular/router';
import { AppComponent } from '../../app.component';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class ServiceSuccess {
  private data:Data;
  private authService: AuthService;
  constructor() { this.authService=  inject(AuthService)  }

  public setDataSuccess(dataReponse:Data): void {
    this.data = dataReponse;
    console.log('setDataSuccess');
    console.log(this.data);
    //Set Token and login user
    if(this.data['message'] == "Login successful"){
      console.log(this.data['message']);
      console.log(this.data['token'].access_token);
      this.authService.setToken(this.data['token'].access_token);
      this.authService.login;
    }
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
