import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';
import { NotificationComponent } from '../components/notifications/notifications.component';
import { NotificationsService } from '../services/notifications.service';
import { RouterModule } from '@angular/router';

@NgModule({
 imports: [NotificationComponent,
  
  RouterModule.forChild([
      
  ])
]
})
export class NotificationsModule { }



