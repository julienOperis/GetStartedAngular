import { Injectable } from '@angular/core';
import { EMPTY, Observable, Subject } from 'rxjs';
import { User } from '../models/user.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private _apiUrl: string = 'http://localhost:3000/auth'


  public userConnecte$: Subject<string> = new Subject();

  public getUser$: Observable<string> = this.userConnecte$.asObservable()

  

  public authentification(nomUser: string): void {
    // R�cup?re un user en base, v�rifie qu'il existe et renvoie les donn�es du user connect� 
    this.userConnecte$.next(nomUser) // le user trouv�
  }


}
