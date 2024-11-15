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
import {
  FormService
} from '../../core/services/form.service';
import { ServiceSuccess } from '../../core/services/serviceSuccess.service';
import { InscriptionService } from '../../core/services/inscription.service';
import { emailValidator } from '../../core/validators/email.validator';
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
    public formService: FormService
  ) {
    this.inscriptionForm = this.fb.group(
      {
        email: new FormControl('email', [Validators.required,  emailValidator()]),
        password: new FormControl(['password', Validators.required,Validators.minLength(4)]),
        firstnam: new FormControl(['firstname', Validators.required,Validators.minLength(4)]),
        lastname: new FormControl(['lastname', Validators.required,Validators.minLength(4)])
      }
    );    
  }

  public inscription(): void {
    //Observable<User>

    this.inscriptionService
      .inscription$(this.inscriptionForm.value)
      .pipe(
        take(1),
        tap((reponse) => this.serviceSuccess.setDataSuccess(reponse)),
        catchError((error) => {
          console.error(error);
          return EMPTY; //Couper le flux,
        }),
        finalize(() => this.router.navigate(['/connexion']))
      )
      .subscribe();
    //status: 409, error statusCode	409
    //status: 201, Create
  }

  public formIsInvalidTouchedHtml(nomChamps: string): void {
    this.formService.formIsInvalidTouched(nomChamps, this.inscriptionForm);
  }
}
