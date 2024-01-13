import {Component} from "@angular/core";
export {FormField} from "./form-field/form-field.component";


@Component({
    selector:"sign-in-form",
    templateUrl:"./sign-in-form.component.html",
    styleUrls:["./sign-in-form.component.scss"],
    
})
export class SignInForm {
    input={};

    onLogin(){

    }

    onChange(value:any){
        console.log({value});
    }

    fields=[
        {id:"email",placeholder:"Enter your email address"},
        {id:"password",placeholder:"Enter your password"},
    ];
}
