import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoriqueService {

  historiqueList = [
    {
      id: 1,
      date: '2021-06-01',
      action: 'Le produit est cassé',
      id_utilisateur : 4,
      etat: 'Non traitée',
      id_reclamation:5,
      id_client: 15,
      id_produit: 77,
    },
    {
      id: 2,
      date: '2021-06-02',
      action: 'Le produit est en inspection',
      id_utilisateur : 4,
      etat: 'En cours',
      id_reclamation:5,
      id_client: 15,
      id_produit: 77,
    },
    {
      id: 3,
      date: '2021-06-03',
      action: 'Le produit est fixé',
      id_utilisateur : 4,
      etat: 'Traitée',
      id_reclamation:5,
      id_client: 15,
      id_produit: 77,
    },
    {
      id: 4,
      date: '2021-06-04',
      action: 'Le produit est cassé',
      id_utilisateur : 4,
      etat: 'Non traitée',
      id_reclamation:2,
      id_client: 1,
      id_produit: 1,
    },
    {
      id: 5,
      date: '2021-06-04',
      action: 'Le produit est cassé',
      id_utilisateur : 4,
      etat: 'Non traitée',
      id_reclamation:1,
      id_client: 8,
      id_produit: 44,
    },
  ];
}
