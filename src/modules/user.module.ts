import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { UsersComponent } from '../components/users/users.component';
import { UserDetailsComponent } from '../components/user-details/user-details.component';
import { UserFormComponent } from '../components/user-form/user-form.component';

import { UserService } from '../services/user.service';

@NgModule({
  declarations: [UsersComponent, UserDetailsComponent, UserFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'users', component: UsersComponent },
      { path: 'user/:id', component: UserDetailsComponent },
      { path: 'creer-user', component: UserFormComponent },
      { path: 'modifier-user/:id', component: UserFormComponent },
    ]),
  ],
  providers: [UserService],
  exports: [],
})
export class UserModule {}
