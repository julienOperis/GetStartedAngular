import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() { }

  public formIsInvalidTouched(formControl: string, form:FormGroup): boolean {

    return (
      (form.get(formControl)?.invalid &&
      form.get(formControl)?.touched) as boolean
    );
  }
}
