import { NgClass } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, provideRouter, Router, RouterLink, RouterModule } from '@angular/router';
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
import { AuthService } from '../../core/services/auth.service';
import { catchError, EMPTY, finalize, take, tap } from 'rxjs';
import { AlertService } from '../../core/services/alert.service';
import { AlertComponent } from '../../components/alert/alert.component';



@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, RouterLink],
  templateUrl: './connexion.page.html',
  styleUrl: './connexion.page.scss',
})


export class ConnexionComponent implements OnInit{
//v17
//  constructor(private route: ActivatedRoute) {}
//v18
private route=inject(ActivatedRoute)

  public loginForm: FormGroup;
  public isFormSubmitted: boolean = false;
  public showMsgInvalidFrom: boolean;
  private router: Router;

  constructor(private fb: FormBuilder, private serviceSuccess:ServiceSuccess, private authService: AuthService, public formService:FormService,    private alertService:AlertService) {
    this.loginForm = this.fb.group(
    {
      email: new FormControl('', [Validators.required,  emailValidator()]),
      password: new FormControl('', [Validators.required,Validators.minLength(4)])
    });
  }


  ngOnInit(): void {    
    let successdata:Data;
    
    successdata = this.serviceSuccess.getDataSuccess();
    if(successdata){
      console.log(' ngOnInit getDataSuccess');
      console.log(successdata['email']);
      this.loginForm.get('email')?.patchValue(successdata['email']);
    }
    

    
  }


  public setLoginData(): void {
    this.route.paramMap.pipe(
      tap((loginData)=> this.loginForm.get('email')?.setValue(loginData.get('email'))))
    .subscribe();
  }

  public onBouttonConnexion(): void {
    this.loginForm.markAllAsTouched();
    this.isFormSubmitted = true;
    this.showMsgInvalidFrom =
      this.loginForm.invalid && this.loginForm.touched && this.isFormSubmitted;

    if (this.loginForm.valid) {
      this.authentification();
    } else {
      this.loginForm.get('email')?.patchValue('');
      this.loginForm.get('password')?.patchValue('');
    }
    this.isFormSubmitted = false;

  }
  public formIsInvalidTouchedHtml(nomChamps:string):void{
    this.formService.formIsInvalidTouched(nomChamps,this.loginForm);
  }

  public authentification(): void {
    //Observable<User>

    this.authService
      .authentification$(this.loginForm.value)
      .pipe(
        take(1),
        tap((reponse) => this.serviceSuccess.setDataSuccess(reponse)),
        catchError((error) => {
          console.error(error.status);
          
          if(error.status == 401)
            this.alertService.setAlert('Incorrect email or password',AlertComponent.ERROR);
          else
            this.alertService.setAlert('An error has occurred :'+error.error.message,AlertComponent.ERROR);
          
          return EMPTY; //Couper le flux,
        }),
        finalize(() => this.router.navigate(['/profil']))
      )
      .subscribe();
    //status: 409, error statusCode	409
    //status: 201, Create
  }
}

