import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class GlobalService {

  userIsLoggedIn: boolean = false;
  constructor(){}

  // Méthodes pour modifier les variables globales
  setLoginStatus(status: boolean): void {
    this.userIsLoggedIn = status;
  }

  getLoginStatus(): boolean {
    return this.userIsLoggedIn;
  }

}