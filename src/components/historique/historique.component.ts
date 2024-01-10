import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Reclamation {
  id: number;
  date: string;
  type: string;
  etat: string;
  description: string;
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

  etats = [
    { name: "En Cours" },
    { name: "Traitée" }
  ];

  handleClick(event: Event, id: number) {
    console.log(`Reclamation ID: ${id} was clicked.`);
    this.router.navigate([`reclamation-detail-id/${id}`]);
  }

  changeState(reclamation: Reclamation, event: Event) {
    const currentTarget = event.target as HTMLSelectElement;
    reclamation.etat = currentTarget.value;
  }
}
