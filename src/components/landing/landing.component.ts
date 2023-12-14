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
  constructor(private router: Router) { }

  login() {
    console.log('Login button clicked');
    // Add logic for login
    this.router.navigate(['/login']); // Navigate to "/login"
  }

  signup() {
    console.log('Signup button clicked');
    // Add logic for signup
    this.router.navigate(['/login']); // Navigate to "/signup"
  }

  newComplaint(){
    console.log('Add new complaint');
    // this.router.navigate(['/complaint']);

  }
}
