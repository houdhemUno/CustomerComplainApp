import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// Custom validator for email format
export const emailValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const isValid = emailRegex.test(control.value);

  return isValid ? null : { invalidEmail: true };
};

// Custom validator for password strength
export const passwordStrengthValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.value;

  // Define your password strength rules here
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  const isStrong = hasUpperCase && hasLowerCase && hasNumber && hasSpecialCharacter;

  return isStrong ? null : { weakPassword: true };
};

export const passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password')?.value;
  const confirmPassword = control.get('confirmPassword')?.value;

  return password === confirmPassword ? null : { passwordMismatch: true };
}

export const userNameValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const userNameRegex = /^[a-zA-Z0-9]+$/;
  const isValid = userNameRegex.test(control.value);

  return isValid ? null : { invalidUserName: true };
}

export const firstAndLastNameValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const nameRegex = /^[a-zA-Z]+$/;
  const isValid = nameRegex.test(control.value);

  return isValid ? null : { invalidName: true };
}
