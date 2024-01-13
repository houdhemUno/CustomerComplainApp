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
  //}
  // Récupérer une réclamation par son ID depuis le backend
  //getReclamationById(reclamationId: number): Observable<Reclamation> {
  //}
  // Créer une nouvelle réclamation
  //createReclamation(reclamation: Reclamation){
  //}
  // Mettre à jour une réclamation
  //updateReclamation(reclamation: Reclamation): Observable<Reclamation>{
  //}
  // Supprimer une réclamation sur le backend
  // deleteReclamation(id: number){}
}
