import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class AlertService {
  private _showAlert = new BehaviorSubject<{message:string,type:string}| null>(null);  
  public showAlert$ = this._showAlert.asObservable();

  public setAlert(message:string,type:string):void{
    console.log('setAlert alertservice message:'+message+' type'+type )
      this._showAlert.next({message:message,type:type});
  }


}
