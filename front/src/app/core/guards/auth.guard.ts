import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject, Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  private authService = inject(AuthService);  
  private router = inject(Router)

  public canActivate():boolean{
    if(this.authService.userIsAuthenticated())
      return true;
    else {
      this.router.navigate(['/connexion'])
      return false;
    }
      
  }
};
