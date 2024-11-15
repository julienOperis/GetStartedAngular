import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {RouterLink, RouterModule} from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Data } from '@angular/router';
import { FormService } from '../../core/services/form.service';
import { ServiceSuccess } from '../../core/services/serviceSuccess.service';
import { emailValidator } from '../../core/validators/email.validator';


@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, RouterModule],
  templateUrl: './connexion.page.html',
  styleUrl: './connexion.page.scss',
})


export class ConnexionComponent implements OnInit{

  ngOnInit(): void {    
    let successdata:Data;
    
    successdata = this.serviceSuccess.getDataSuccess();
    if(successdata){
      console.log(' ngOnInit getDataSuccess');
      console.log(successdata['email']);
      this.loginForm.get('email')?.patchValue(successdata['email']);
    }
  }

  public loginForm: FormGroup;
  public isFormSubmitted: boolean = false;
  public showMsgInvalidFrom: boolean;

  constructor(private fb: FormBuilder, private serviceSuccess:ServiceSuccess, public formService:FormService) {
    this.loginForm = this.fb.group(
    {
      email: new FormControl('', [Validators.required,  emailValidator()]),
      password: new FormControl('', [Validators.required,Validators.minLength(4)])
    });
  }

  public onBouttonConnexion(): void {
    this.loginForm.markAllAsTouched();
    this.isFormSubmitted = true;
    this.showMsgInvalidFrom =
      this.loginForm.invalid && this.loginForm.touched && this.isFormSubmitted;

    if (this.loginForm.valid) {
    } else {
      this.loginForm.get('email')?.patchValue('');
      this.loginForm.get('password')?.patchValue('');
    }
    this.isFormSubmitted = false;
  }
  public formIsInvalidTouchedHtml(nomChamps:string):void{
    this.formService.formIsInvalidTouched(nomChamps,this.loginForm);
  }
}
