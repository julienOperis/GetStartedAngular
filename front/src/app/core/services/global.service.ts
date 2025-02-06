import { inject, Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class GlobalService {
  private authService = inject(AuthService);


  getLoginStatus(): boolean {
    return this.authService.userIsAuthenticated();
  }


  
  
}