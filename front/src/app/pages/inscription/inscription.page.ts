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
  Déroulement du Code

    Récupération des données du formulaire :
        this.inscriptionForm.value : extrait les données saisies par l'utilisateur dans le formulaire.

    Appel au service inscription$ :
        this.inscriptionService.inscription$(...) : envoie les données du formulaire au backend via un service. Ce service renvoie un Observable contenant la réponse du serveur.

    Chaînage des opérateurs RxJS :
        pipe(...) : permet d'appliquer des transformations ou de gérer les erreurs dans le flux d'observable.
    Opérateurs utilisés :
        take(1) :
            Ne prend en compte qu'une seule réponse du serveur (unsubscribe automatiquement apr?s la premi?re émission).
        catchError((error) => {...}) :
            En cas d'erreur (ex. : réponse HTTP avec un code 409 ou 500), l'erreur est capturée.
            La méthode affiche un message d'erreur avec this.alertService.setAlert('Une erreur est survenue').
            return EMPTY : stoppe le flux d'observable sans émettre d'autres événements.
        tap((reponse) => {...}) :
            Permet de gérer une réponse réussie du serveur (ex. : code HTTP 201).
            Actions effectuées :
                Appel de this.serviceSuccess.setDataSuccess(reponse) pour stocker les données de succ?s.
                Navigation vers la route /connexion avec this.router.navigate(['/connexion']).

    Abonnement avec subscribe() :
        Finalise l'exécution de l'observable en déclenchant le flux défini dans les étapes précédentes.
  */

  public formIsInvalidTouchedHtml(nomChamps: string): void {
    this.formService.formIsInvalidTouched(nomChamps, this.inscriptionForm);
  }
}
