import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClaimsPriorityService {
  private claimsPriority = new BehaviorSubject<any[]>([]);

  constructor() { }

  setClaimPriority(claimId: number, priority: number): void {
    // TODO: Implement logic for setting claim priority
    const updatedClaims = this.claimsPriority.value.map(claim => {
      if (claim.id === claimId) {
        return { ...claim, priority };
      }
      return claim;
    });
    this.claimsPriority.next(updatedClaims);
  }

  getClaimPriority(claimId: number): number {
    const claim = this.claimsPriority.value.find(c => c.id === claimId);
    return claim ? claim.priority : null;
  }
}