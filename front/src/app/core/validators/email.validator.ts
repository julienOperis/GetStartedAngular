import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function emailValidator():ValidatorFn{
    
    return (control:AbstractControl):ValidationErrors | null=>{
        if(!control.value){
            return null;
        }
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        const valide = regex.test(control.value);
        return valide?null:{emailInvalide:{message:"Mail non comforme au format"}}
    }
}