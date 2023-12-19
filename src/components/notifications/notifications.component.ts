import { Component ,OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsService } from '../../services/notifications.service';
@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss'
})
export class NotificationComponent implements OnInit {
  constructor(private notificationsService: NotificationsService) { }

  ngOnInit() {
    // Abonnez-vous aux messages de notification du service.
    this.notificationsService.getNotifications().subscribe((message: string) => {
      // Affichez le message de notification à l'utilisateur.
    });
  }

}
