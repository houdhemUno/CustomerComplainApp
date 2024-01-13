import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Historique_Rec } from '../../modules/history.module';
import { HistoriqueService } from '../../services/historique.service';
import { log } from 'console';

@Component({
  selector: 'app-historique',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './historique.component.html',
  styleUrl: './historique.component.scss',
})

export class HistoriqueComponent {

  //an array of only historique model
  reclamations!: Array<Historique_Rec>;
  //fetching the data from the historique service
  constructor(private historiqueService:HistoriqueService ,private router: Router) { 
    this.reclamations=historiqueService.historiqueList;
  }
  
  auditOn = false;
  auditIndex!:number;
  filtered_Rec!: Array<Historique_Rec>;

  etats = [
    { name: "Non validée" },
    { name: "En cours" },
    { name: "Validée" }
  ];

  handleClick(event: Event, id: number) {
    console.log(`Reclamation ID: ${id} was clicked.`);
    this.router.navigate([`reclamation-detail-id/${id}`]);
  }

  changeState(reclamation: Historique_Rec, event: Event) {
    const currentTarget = event.target as HTMLSelectElement;
    reclamation.etat = currentTarget.value;
  }

  audit(Rec_index:number){
    this.auditOn = true;
    this.auditIndex = Rec_index;
    this.filtered_Rec = this.reclamations.filter((reclamation) => reclamation.id_reclamation===Rec_index);
    console.log(this.filtered_Rec);
  }    

}
