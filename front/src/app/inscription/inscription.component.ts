import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { UserRequest } from '../models/user.interface';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {  tap } from 'rxjs';
import { InscriptionService } from './inscription.service';
@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.scss'
})
export class InscriptionComponent {
  public inscriptionForm: FormGroup;
  public userForm:UserRequest;


  constructor(private fb:FormBuilder, private inscriptionService: InscriptionService) {
    this.inscriptionForm = this.fb.group({
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
    this.inscriptionService.inscription(this.inscriptionForm.value).pipe(tap((reponse)=>console.log(reponse))).subscribe();
    
  }

}
