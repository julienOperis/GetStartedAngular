import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import { UserRequest } from '../models/user.interface';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {  first, tap } from 'rxjs';
import { InscriptionService } from './inscription.service';
import { ServiceSuccess } from '../services/serviceSuccess.service';
import { ConnexionComponent } from '../connexion/connexion.component';
import { DialoggenericComponent } from "../dialoggeneric/dialoggeneric.component";
@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [NgClass, ReactiveFormsModule, RouterModule, DialoggenericComponent],
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.scss'
})
export class InscriptionComponent {
  public inscriptionForm: FormGroup;
  public userForm:UserRequest;


  constructor(private router:Router,private fb:FormBuilder, private inscriptionService: InscriptionService, private serviceSuccess: ServiceSuccess) {
    this.inscriptionForm = this.fb.group({
      firstName:[''],
      lastName:[''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  // Créer un formulaire côté component.ts. 
  // Créer le formulaire côté html
  // Binder les 2 eznsembles

  // Passe les data du formulaire ? ta fonction inscription()

  // Crée un bouton ? ton form qui appelle inscription()

  // Appeler Baptiste
  // Traiter les data reçus par l'api (User). 
  // https://rxjs.dev/guide/operators
  // Au retour de l'api naviguer vers cxonnexion et afficher l'email du User inscrit dans l'input email de connexion

  public inscription():void{//Observable<User>
    //this.inscritObs= this.inscriptionService.inscription(this.inscriptionForm.value)
    //this.inscriptionService.inscription(this.inscriptionForm.value).pipe(tap((reponse)=>console.log(reponse.email))).subscribe();
    this.inscriptionService.inscription(this.inscriptionForm.value).pipe(tap((reponse)=>this.serviceSuccess.setDataSuccess(reponse))).subscribe({
      next: message => console.log(message),
      error: err => console.error('Quelque chose s\'est mal passé :', err),
      complete: () => this.router.navigate(['/connexion'])
    });
    /*
    this.inscriptionService.inscription(this.inscriptionForm.value).pipe(tap((reponse)=>this.serviceSuccess.setDataSuccess(reponse))).subscribe({
      next: message => console.log(message),
      error: err => console.error('Quelque chose s\'est mal passé :', err),
      complete: () => console.log('L\'histoire est terminée !')
    });
    */

    //status: 409, error statusCode	409
    //status: 201, Create
  }
}
