import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  authenticationToken : String;
  loginError : boolean;
  signupError : boolean;
  constructor(private router: Router) { 
  this.authenticationToken = "";
  this.loginError = true;
  this.signupError = true;
  }

  login() {
    console.log('Login button clicked');
    // Add logic for login
    this.authenticationToken =this.authenticate();
    if(this.authenticationToken != ""){
      this.router.navigate(['/login']); // Navigate to "/login"
    }
    else{
      this.router.navigate(['']); // rester sur ce component dans le cas ou authenticationToken est vide
      this.loginError = false;
      console.log('loginfail');
    }
    
  }

  signup() {
    this.authenticationToken =this.authenticate();
    if(this.authenticationToken != ""){
      this.router.navigate(['/login']); // Navigate to "/login"
    }
    else{
      this.router.navigate(['']); // rester sur ce component dans le cas ou authenticationToken est vide
      this.signupError = false;
      console.log('signup fail');
    }
  }

  newComplaint(){
    console.log('Add new complaint');
    // this.router.navigate(['/complaint']);
  
  
  }
  authenticate(){
    return "autorization Token"; // à changer avec un service d'authentification avec Http Client dans le cas de communication avec backend
  }
}
