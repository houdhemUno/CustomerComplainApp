import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoriqueService {

  historiqueList = [
    {
      id: 1,
      date: '2021-06-01',
      type: 'Produit',
      etat: 'En cours',
      description: 'Le produit est cassé',
      id_client: 1,
      id_produit: 1,
      id_commande: 1,
      id_livraison: 1,
    },
    {
      id: 2,
      date: '2021-06-01',
      type: 'Produit',
      etat: 'En cours',
      description: 'Le produit est cassé',
      id_client: 1,
      id_produit: 1,
      id_commande: 1,
      id_livraison: 1,
    },
    {
      id: 3,
      date: '2021-06-01',
      type: 'Produit',
      etat: 'Traitée',
      description: 'Le produit est cassé',
      id_client: 1,
      id_produit: 1,
      id_commande: 1,
      id_livraison: 1,
    },
    {
      id: 4,
      date: '2021-06-01',
      type: 'Produit',
      etat: 'En cours',
      description: 'Le produit est cassé',
      id_client: 1,
      id_produit: 1,
      id_commande: 1,
      id_livraison: 1,
    },
    {
      id: 5,
      date: '2021-06-01',
      type: 'Produit',
      etat: 'Traitée',
      description: 'Le produit est cassé',
      id_client: 1,
      id_produit: 1,
      id_commande: 1,
      id_livraison: 1,
    },
  ];
}
