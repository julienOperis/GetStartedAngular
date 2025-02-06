import { Component, inject } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { catchError, finalize, take, tap } from 'rxjs';

@Component({
  selector: 'app-profil',
  standalone: true,
  imports: [],
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.scss'
})
export class ProfilComponent {

  private authService = inject(AuthService);

  ngOnInit(): void {    

    this.profil();

  }


  public profil(): void {
      this.authService
        .profile$()
          .pipe(
            take(1),
            tap((reponse)=> console.log(reponse)),
            
          finalize(() => {})  
          ).subscribe();
         }
        }
    //     .authentification$(this.loginForm.value)
    //     .pipe(
    //       take(1),
    //       tap((reponse) => this.serviceSuccess.setDataSuccess(reponse)),
    //       catchError((error) => {
    //         console.error(error.status);
            
    //         if(error.status == 401)
    //           this.alertService.setAlert('Incorrect email or password',AlertComponent.ERROR);
    //         else
    //           this.alertService.setAlert('An error has occurred :'+error.error.message,AlertComponent.ERROR);
            
    //         return EMPTY; //Couper le flux,
    //       }),
    //       finalize(() => {
    //         console.log('navigation vers /accueil');
    //         this.router.navigate(['/accueil']);
    //       })
    //     )
    //     .subscribe();
    // }

  

