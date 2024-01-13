// recherche.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RechercheService {
  private reclamations: any[] = [
    { id: '1', reclamant: 'Utilisateur 1', objet: 'Réclamation 1', date: '2022-01-01' },
    { id: '2', reclamant: 'Utilisateur 2', objet: 'Réclamation 2', date: '2022-01-02' },
    { id: '3', reclamant: 'Utilisateur 3', objet: 'Réclamation 3', date: '2022-01-03' },
    // ... ajoutez autant d'éléments que nécessaire
  ];

  rechercherParId(id: string): any[] {
    return this.reclamations.filter(reclamation => reclamation.id.toLowerCase().includes(id.toLowerCase()));
  }

  rechercherParReclamant(reclamant: string): any[] {
    return this.reclamations.filter(reclamation =>
      reclamation.reclamant.toLowerCase().includes(reclamant.toLowerCase())
    );
  }

  rechercherParObjet(objet: string): any[] {
    return this.reclamations.filter(reclamation => reclamation.objet.toLowerCase().includes(objet.toLowerCase()));
  }

  rechercherParDate(date: string): any[] {
    return this.reclamations.filter(reclamation => reclamation.date.includes(date));
  }
}
