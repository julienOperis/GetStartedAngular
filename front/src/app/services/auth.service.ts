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
    // Récup?re un user en base, vérifie qu'il existe et renvoie les données du user connecté 
    this.userConnecte$.next(nomUser) // le user trouvé
  }


}
