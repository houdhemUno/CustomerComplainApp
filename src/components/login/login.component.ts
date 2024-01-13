import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
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
}
