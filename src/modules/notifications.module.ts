import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';
import { NotificationsComponent } from '../components/notifications/notifications.component';
import { NotificationsService } from '../services/notifications.service';

@NgModule({
 imports: [NotificationsComponent],
  providers: [NotificationsService],
})
export class NotificationsModule { }



