
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SearchService } from '../../services/search.service';
import { ReclamationService, Reclamation } from '../../services/reclamation.service';
import { FormsModule } from '@angular/forms';
import { ReclamationDetailsComponent } from '../reclamation-details/reclamation-details.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reclamation-recherche',
  templateUrl: './reclamation-recherche.component.html',
  styleUrls: ['./reclamation-recherche.component.scss'],
 standalone :true,
  imports: [
    
    FormsModule, 
    ReclamationDetailsComponent,
    CommonModule
  ],
})
export class ReclamationRechercheComponent implements OnInit {
  searchForm: FormGroup;
  selectedReclamation: Reclamation | null = null;

  constructor(
    private fb: FormBuilder,
    private searchService: SearchService,
    private reclamationService: ReclamationService
  ) {
    this.searchForm = this.fb.group({
      searchTerm: [''],
    });
  }

  ngOnInit() {
    this.searchForm.valueChanges.subscribe((formValue) => {
      const searchTerm = formValue.searchTerm;
      console.log(searchTerm);
      this.searchService.setSearchTerm(searchTerm);

      // Parse the search term to a number (assuming it's an ID)
      const reclamationId = parseInt(searchTerm, 10) || 0;

      // Perform the search when the search term changes
      this.reclamationService.getReclamationById(reclamationId).subscribe(
        (reclamation) => {
          // Update the selectedReclamation when found
          this.selectedReclamation = reclamation;
        },
        (error) => {
          console.error('Error searching for reclamation:', error);
        }
      );
    });
  }

  searchReclamations() {
    const searchTerm = this.searchForm.value.searchTerm;
    console.log(searchTerm);
  
    this.searchService.setSearchTerm(searchTerm);
  
    // Parse the search term to a number (assuming it's an ID)
    const reclamationId = parseInt(searchTerm, 10) || 0;
  
    // Perform the search when the form is submitted
    this.reclamationService.getReclamationById(reclamationId).subscribe(
      (reclamation) => {
        // Update the selectedReclamation when found
        this.selectedReclamation = reclamation;
      },
      (error) => {
        console.error('Error searching for reclamation:', error);
      }
    );
  }
  
}
