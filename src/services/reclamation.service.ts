import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Reclamation {
  id: number;
  sujet: string;
  description: string;
  date: Date;
}

export class ReclamationService {
  // Récupérer toutes les réclamations 
  //getAllReclamations(): Observable<Reclamation[]> {
    //Implémentation (Mise en commentaire car elle doit être développé par l'équipe concernée pour ne pas générer des erreurs)
    
  //}
  // Récupérer une réclamation par son ID depuis le backend
  //getReclamationById(reclamationId: number): Observable<Reclamation> {
    //Implémentation 

  //}
  // Créer une nouvelle réclamation
  createReclamation(reclamation: Reclamation){

  }

  //}
  // Mettre à jour une réclamation
  //updateReclamation(reclamation: Reclamation): Observable<Reclamation>{
    //Implémentation 

  //}
  // Supprimer une réclamation sur le backend
   deleteReclamation(id: number){}
}
