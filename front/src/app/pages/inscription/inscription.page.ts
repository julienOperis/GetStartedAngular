import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UserRequest } from '../../core/models/user.interface';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { catchError, EMPTY, finalize, first, take, tap } from 'rxjs';

import { ConnexionComponent } from '../connexion/connexion.page';
import { DialoggenericComponent } from '../../components/dialoggeneric/dialoggeneric.component';
import { FormService } from '../../core/services/form.service';
import { ServiceSuccess } from '../../core/services/serviceSuccess.service';
import { InscriptionService } from '../../core/services/inscription.service';
import { emailValidator } from '../../core/validators/email.validator';
import { AlertService } from '../../core/services/alert.service';
@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [NgClass, ReactiveFormsModule, RouterModule, DialoggenericComponent],
  templateUrl: './inscription.page.html',
  styleUrl: './inscription.page.scss',
})
export class InscriptionComponent {
  public inscriptionForm: FormGroup;
  public inscriptionFormControl: FormControl;
  public userForm: UserRequest;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private inscriptionService: InscriptionService,
    private serviceSuccess: ServiceSuccess,
    private alertService:AlertService,
    public formService: FormService
  ) {
    this.inscriptionForm = this.fb.group({
      firstname: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      lastname: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      email: new FormControl('', [Validators.required, emailValidator()]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
    });
  }

  public inscription(): void {
    //Observable<User>

    this.inscriptionService
      .inscription$(this.inscriptionForm.value)
      .pipe(
        take(1),
        catchError((error) => {
          console.error(error);
          this.alertService.setAlert('Une erreur est survenue');
          return EMPTY; //Couper le flux,
        }),
        tap((reponse) => {
          this.serviceSuccess.setDataSuccess(reponse);
          this.router.navigate(['/connexion']);
        })
      )
      .subscribe();
    //status: 409, error statusCode	409
    //status: 201, Create
  }

  /*
  D�roulement du Code

    R�cup�ration des donn�es du formulaire :
        this.inscriptionForm.value : extrait les donn�es saisies par l'utilisateur dans le formulaire.

    Appel au service inscription$ :
        this.inscriptionService.inscription$(...) : envoie les donn�es du formulaire au backend via un service. Ce service renvoie un Observable contenant la r�ponse du serveur.

    Cha�nage des op�rateurs RxJS :
        pipe(...) : permet d'appliquer des transformations ou de g�rer les erreurs dans le flux d'observable.
    Op�rateurs utilis�s :
        take(1) :
            Ne prend en compte qu'une seule r�ponse du serveur (unsubscribe automatiquement apr?s la premi?re �mission).
        catchError((error) => {...}) :
            En cas d'erreur (ex. : r�ponse HTTP avec un code 409 ou 500), l'erreur est captur�e.
            La m�thode affiche un message d'erreur avec this.alertService.setAlert('Une erreur est survenue').
            return EMPTY : stoppe le flux d'observable sans �mettre d'autres �v�nements.
        tap((reponse) => {...}) :
            Permet de g�rer une r�ponse r�ussie du serveur (ex. : code HTTP 201).
            Actions effectu�es :
                Appel de this.serviceSuccess.setDataSuccess(reponse) pour stocker les donn�es de succ?s.
                Navigation vers la route /connexion avec this.router.navigate(['/connexion']).

    Abonnement avec subscribe() :
        Finalise l'ex�cution de l'observable en d�clenchant le flux d�fini dans les �tapes pr�c�dentes.
  */

  public formIsInvalidTouchedHtml(nomChamps: string): void {
    this.formService.formIsInvalidTouched(nomChamps, this.inscriptionForm);
  }
}
