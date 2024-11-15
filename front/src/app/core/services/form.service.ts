import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { emailValidator } from '../validators/email.validator';
// export const TOTOT:Record<string, string> = {test:'defdd'}

// export const AUTH_FORM_MAIL:FormGroup= new FormGroup({'email': new FormControl('email', [Validators.required,  emailValidator()])});
// export const AUTH_FORM_PASS:FormGroup= new FormGroup({'password': new FormControl(['password', Validators.required,Validators.minLength(4)])});
// export const AUTH_FORM_FNAME:FormGroup= new FormGroup({'firstname': new FormControl(['firstname', Validators.required,Validators.minLength(4)])});
// export const AUTH_FORM_LNAME:FormGroup= new FormGroup({'lastname': new FormControl(['lastname', Validators.required,Validators.minLength(4)])});

// //export const AUTH_FORM_MAIL= {email: ['', [Validators.required, emailValidator()]]};
// export const AUTH_FORM_PASS = {password: ['', Validators.required,Validators.minLength(4)]}
// export const AUTH_FORM_FNAME = {firstname: ['', Validators.required,Validators.minLength(4)]}
// export const AUTH_FORM_LNAME = {lastname: ['', Validators.required,Validators.minLength(4)]}

// export const AUTH_FORM_MAIL_PASS = {
//   ...AUTH_FORM_MAIL,
//   ...AUTH_FORM_PASS,
// };

// export const INSC_FORM_MAIL_PASS_FNAME_LNAME = {
//   ...AUTH_FORM_MAIL_PASS,
//   ...AUTH_FORM_FNAME,
//   ...AUTH_FORM_LNAME
// };

@Injectable({
  providedIn: 'root'
})

export class FormService {

  constructor() {

   }

  public formIsInvalidTouched(formControl:string, form:FormGroup): boolean {
    
    return (
      (form.get(formControl)?.invalid &&
      form.get(formControl)?.touched) as boolean
    );
  }
}
