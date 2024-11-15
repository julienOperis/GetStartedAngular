import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private _showAlert = new BehaviorSubject<string | null>(null);
  public showAlert$ = this._showAlert.asObservable();

  public setAlert(message:string):void{
      this._showAlert.next(message);
  }

}
