import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Reclamation {
  id_reclamation: number;
  date_reclamation: string;
  type_reclamation: string;
  etat_reclamation: string;
  description_reclamation: string;
  id_client: number;
  id_produit: number;
  id_commande: number;
  id_livraison: number;
}
@Component({
  selector: 'app-historique',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './historique.component.html',
  styleUrl: './historique.component.scss',
})
export class HistoriqueComponent {
   constructor(private router: Router) { }
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
  handleClick(event: Event, id_reclamation: number) {
    console.log(`Reclamation ID: ${id_reclamation} was clicked.`);
    this.router.navigate([`reclamation-detail-id/${id_reclamation}`]);
  }
  changeEtat(reclamation: Reclamation, newState: string) {
    reclamation.etat_reclamation = newState;
  }
}
