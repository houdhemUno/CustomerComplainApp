import { Injectable } from '@angular/core';
import { Observable,map,of } from 'rxjs';

export interface Reclamation {
  id: number;
  sujet: string;
  description: string;
  date: Date;
}

@Injectable({
  providedIn: 'root', 
})
export class ReclamationService {
  // Récupérer toutes les réclamations
  getAllReclamations(): Observable<Reclamation[]> {

    return of ([
      { id: 1, sujet: 'Reclamation 1', description: 'Description 1', date: new Date() },
      { id: 2, sujet: 'Reclamation 2', description: 'Description 2', date: new Date() },
    ]);
  }
  // Récupérer une réclamation par son ID depuis le backend
  getReclamationById(reclamationId: number): Observable<Reclamation | null> {
  return this.getAllReclamations().pipe(
      map((reclamations) => reclamations.find((reclamation) => reclamation.id === reclamationId) || null)
    );
  }
  // Créer une nouvelle réclamation
  //createReclamation(reclamation: Reclamation){
  //}
  // Mettre à jour une réclamation
  //updateReclamation(reclamation: Reclamation): Observable<Reclamation>{
  //}
  // Supprimer une réclamation sur le backend
  // deleteReclamation(id: number){}
}
