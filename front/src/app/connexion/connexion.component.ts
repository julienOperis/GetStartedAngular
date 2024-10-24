import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import {RouterLink, RouterModule} from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, RouterModule],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.scss',
})
export class ConnexionComponent {
  public loginForm: FormGroup;
  public isFormSubmitted: boolean = false;
  public showMsgInvalidFrom: boolean;

  constructor(private fb: FormBuilder) {
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
