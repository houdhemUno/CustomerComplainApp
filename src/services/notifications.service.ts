import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject,Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  private notificationSubject = new Subject<string>();

  sendNotification(message: string) {
    this.notificationSubject.next(message);
  }

  getNotifications(): Observable<string> {
    return this.notificationSubject.asObservable();
  }
}
