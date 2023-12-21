import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private commentUrl = 'https://api.monservice.com/comments'; 

  constructor(private http: HttpClient) {}

  // Méthode pour ajouter un commentaire à une réclamation spécifique
  addComment(commentData: any): Observable<any> {
    return this.http.post<any>(this.commentUrl, commentData);
  }

  // Méthode pour mettre à jour un commentaire existant
  updateComment(commentId: number, updatedData: any): Observable<any> {
    const url = `${this.commentUrl}/${commentId}`;
    return this.http.put<any>(url, updatedData);
  }

  // Méthode pour supprimer un commentaire
  deleteComment(commentId: number): Observable<any> {
    const url = `${this.commentUrl}/${commentId}`;
    return this.http.delete<any>(url);
  }

  //getcomment
}
