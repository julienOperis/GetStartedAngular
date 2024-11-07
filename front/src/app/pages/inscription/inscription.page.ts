import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import { UserRequest } from '../../core/models/user.interface';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {  first, tap } from 'rxjs';

import { ConnexionComponent } from '../connexion/connexion.page';
import { DialoggenericComponent } from "../../components/dialoggeneric/dialoggeneric.component";
import { FormService, INSC_FORM_MAIL_PASS_FNAME_LNAME } from '../../core/services/form.service';
import { ServiceSuccess } from '../../core/services/serviceSuccess.service';
import { InscriptionService } from '../../core/services/inscription.service';
@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [NgClass, ReactiveFormsModule, RouterModule, DialoggenericComponent],
  templateUrl: './inscription.page.html',
  styleUrl: './inscription.page.scss'
})
export class InscriptionComponent {
  public inscriptionForm: FormGroup;
  public userForm:UserRequest;


  constructor(private router:Router,private fb:FormBuilder, private inscriptionService: InscriptionService, private serviceSuccess: ServiceSuccess,public formService:FormService) {
    this.inscriptionForm = this.fb.group(INSC_FORM_MAIL_PASS_FNAME_LNAME);
  }

  public inscription():void{//Observable<User>

    this.inscriptionService.inscription(this.inscriptionForm.value).pipe(tap((reponse)=>this.serviceSuccess.setDataSuccess(reponse))).subscribe({
      next: message => console.log(message),
      error: err => console.error('Quelque chose s\'est mal passé :', err),
      complete: () => this.router.navigate(['/connexion'])
    });
    //status: 409, error statusCode	409
    //status: 201, Create
  }
}
