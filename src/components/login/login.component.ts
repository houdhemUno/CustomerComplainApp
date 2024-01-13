import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpFormComponent } from '../sign-up-form/sign-up-form.component';
import { SignInFormComponent } from '../sign-in-form/sign-in-form.component';
import { FormsModule,
  ReactiveFormsModule,
  Validators,
  FormBuilder,} from '@angular/forms';
import { emailFormatValidator, passwordMatchValidator, passwordStrengthValidator } from '../../utils';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,SignUpFormComponent,SignInFormComponent,FormsModule,
    ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
status: boolean = false;
  clickSignUp(){
      this.status = true;       
  }
  clickSignIn(){
    this.status = false;       
}

  constructor(private fb: FormBuilder) {}

  signUpForm = this.fb.group({
    email: [
      '',
      {
        validators: [Validators.required, Validators.email ,emailFormatValidator()],
        updateOn: 'change',
      },
    ],
    user_name: [
      '',
      {
        validators: [Validators.required, ],
        updateOn: 'change',
      },
    ],
    password: [
      '',
      {
        validators: [Validators.required , passwordStrengthValidator()],
        updateOn: 'change',
      },
    ],
    password_confirm: [
      '',
      {
        validators: [Validators.required , passwordMatchValidator() ],
        updateOn: 'change',
      },
    ],
  });

  signUpSubmit() {
    console.log(this.signUpForm.value);
  }


  
  signInForm = this.fb.group({
    email: [
      '',
      {
        validators: [Validators.required, Validators.email],
        updateOn: 'change',
      },
    ],
    password: [
      '',
      {
        validators: [Validators.required],
        updateOn: 'change',
      },
    ],
  });
  signInSubmit() {
    console.log(this.signInForm.value);
  }

}

