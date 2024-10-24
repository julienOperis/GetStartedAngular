import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserRequest } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})

export class InscriptionService {

  constructor(private httpClient: HttpClient) { }


  public inscription(user:UserRequest):Observable<User>{
    return this.httpClient.post<User>("http://localhost:3000/users",user)
  }
}
