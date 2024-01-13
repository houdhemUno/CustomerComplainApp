// filter.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  constructor() {}

  // Filtrer les réclamations par date
  filterReclamationByDate(
    reclamations: any[],
    startDate: Date,
    endDate: Date
  ): any[] {
    return reclamations.filter((reclamation) => {
      const reclamationDate = new Date(reclamation.date); // la propriété 'date' correspond à la date de la réclamation
      return reclamationDate >= startDate && reclamationDate <= endDate;
    });
  }

  // Filtrer les réclamations par type
  filterReclamationByType(reclamations: any[], type: string): any[] {
    return reclamations.filter((reclamation) => reclamation.type === type);
  }

  // Filtrer les réclamations par statut
  filterReclamationByStatus(reclamations: any[], status: string): any[] {
    return reclamations.filter((reclamation) => reclamation.status === status);
  }

  // Filtrer les réclamations par utilisateur
  filterReclamationByUser(reclamations: any[], userId: number): any[] {
    return reclamations.filter((reclamation) => reclamation.userId === userId);
  }
}
