import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClaimsHistoryService {
  private claimsHistory = new BehaviorSubject<any[]>([]);

  constructor() { }

  addClaimHistory(reclamation: any): void {
    // TODO: Implement logic for adding claim history
    this.claimsHistory.next([...this.claimsHistory.value, reclamation]);
  }

  getClaimsHistory(): Observable<any[]> {
    return this.claimsHistory.asObservable();
  }
}