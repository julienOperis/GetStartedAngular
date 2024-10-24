import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {RouterLink, RouterModule} from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Data } from '@angular/router';
import { ServiceSuccess } from '../services/serviceSuccess.service';
@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, RouterModule],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.scss',
})

export class ConnexionComponent implements OnInit{

  ngOnInit(): void {    
    let successdata:Data;
    
    successdata = this.serviceSuccess.getDataSuccess();
    if(successdata){
      console.log(' ngOnInit getDataSuccess');
      console.log(successdata['email']);
      this.loginForm.get('email')?.patchValue(successdata['email']);
      this.loginForm.get('password')?.patchValue(successdata['password']);      
    }
  }

  public loginForm: FormGroup;
  public isFormSubmitted: boolean = false;
  public showMsgInvalidFrom: boolean;

  constructor(private fb: FormBuilder, private serviceSuccess:ServiceSuccess) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  public onBouttonConnexion(): void {
    this.loginForm.markAllAsTouched();
    this.isFormSubmitted = true;
    this.showMsgInvalidFrom =
      this.loginForm.invalid && this.loginForm.touched && this.isFormSubmitted;

    if (this.loginForm.valid) {
    } else {
      console.log('invalide');
      this.loginForm.get('email')?.patchValue('');
      this.loginForm.get('password')?.patchValue('');
    }
    this.isFormSubmitted = false;
  }
  public formIsInvalidTouched(formControl: string): boolean {

    return (
      (this.loginForm.get(formControl)?.invalid &&
        this.loginForm.get(formControl)?.touched) as boolean
    );
  }

}
