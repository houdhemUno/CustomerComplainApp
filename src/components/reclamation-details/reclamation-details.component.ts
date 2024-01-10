import { Component, Input, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { Reclamation } from '../../services/reclamation.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reclamation-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reclamation-details.component.html',
  styleUrl: './reclamation-details.component.scss',
})
export class ReclamationDetailsComponent implements OnInit {
  @Input() selectedReclamation: Reclamation | null = null;

  constructor(private searchService: SearchService) {}

  ngOnInit() {
    this.searchService.searchTerm$.subscribe((searchTerm) => {

    });
  }
}
