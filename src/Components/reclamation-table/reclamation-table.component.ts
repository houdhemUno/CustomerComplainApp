
import { Component, OnInit } from '@angular/core';
import { ReclamationService, Reclamation } from '../../services/reclamation.service';
import { MatTableModule } from '@angular/material/table'; // Import MatTableModule
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-reclamation-table',
  standalone : true,
  imports: [MatTableModule,CommonModule],
  templateUrl: './reclamation-table.component.html',
  styleUrls: ['./reclamation-table.component.scss'],
})
export class ReclamationTableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'sujet', 'description', 'date']; // Define your columns here

  reclamations: Reclamation[] = [];

  constructor(private reclamationService: ReclamationService) {}

  ngOnInit(): void {
    this.loadReclamations();
  }

  loadReclamations(): void {
    this.reclamationService.getAllReclamations().subscribe((reclamations) => {
      this.reclamations = reclamations;
    });
  }
}
