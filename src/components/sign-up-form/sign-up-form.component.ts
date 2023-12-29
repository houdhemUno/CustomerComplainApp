import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  FormsModule,
  ReactiveFormsModule,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-sign-up-form',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  templateUrl: './sign-up-form.component.html',
  styleUrl: './sign-up-form.component.scss',
})
export class SignUpFormComponent {
  hide = true;

  constructor(private fb: FormBuilder) {}

  form = this.fb.group({
    email: [
      '',
      {
        validators: [Validators.required, Validators.email],
        updateOn: 'change',
      },
    ],
    user_name: [
      '',
      {
        validators: [Validators.required],
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
    password_confirm: [
      '',
      {
        validators: [Validators.required],
        updateOn: 'change',
      },
    ],
  });

  submit() {
    console.log(this.form.value);
  }
}
