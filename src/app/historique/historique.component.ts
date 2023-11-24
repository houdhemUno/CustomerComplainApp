import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-historique',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './historique.component.html',
  styleUrl: './historique.component.scss',
})
export class HistoriqueComponent {
  reclamations = [
    {
      id_reclamation: 1,
      date_reclamation: '2021-06-01',
      type_reclamation: 'Produit',
      etat_reclamation: 'En cours',
      description_reclamation: 'Le produit est cassé',
      id_client: 1,
      id_produit: 1,
      id_commande: 1,
      id_livraison: 1,
    },
    {
      id_reclamation: 2,
      date_reclamation: '2021-06-01',
      type_reclamation: 'Produit',
      etat_reclamation: 'En cours',
      description_reclamation: 'Le produit est cassé',
      id_client: 1,
      id_produit: 1,
      id_commande: 1,
      id_livraison: 1,
    },
    {
      id_reclamation: 3,
      date_reclamation: '2021-06-01',
      type_reclamation: 'Produit',
      etat_reclamation: 'Traitée',
      description_reclamation: 'Le produit est cassé',
      id_client: 1,
      id_produit: 1,
      id_commande: 1,
      id_livraison: 1,
    },
    {
      id_reclamation: 4,
      date_reclamation: '2021-06-01',
      type_reclamation: 'Produit',
      etat_reclamation: 'En cours',
      description_reclamation: 'Le produit est cassé',
      id_client: 1,
      id_produit: 1,
      id_commande: 1,
      id_livraison: 1,
    },
    {
      id_reclamation: 5,
      date_reclamation: '2021-06-01',
      type_reclamation: 'Produit',
      etat_reclamation: 'Traitée',
      description_reclamation: 'Le produit est cassé',
      id_client: 1,
      id_produit: 1,
      id_commande: 1,
      id_livraison: 1,
    },
  ];
}
