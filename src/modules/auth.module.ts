import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LoginComponent } from '../components/login/login.component';
import { AuthenticationService } from '../services/authentication.service';

@NgModule({
  declarations: [
    // LoginComponent
  ],
  imports: [
    LoginComponent,
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'login', component: LoginComponent }
    ])
  ],
  providers: [
    AuthenticationService
  ],
  exports: [
    LoginComponent 
  ]
})
export class AuthModule { }
