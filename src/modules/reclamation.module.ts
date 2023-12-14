import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ReclamationsComponent } from '../components/reclamations/reclamations.component';
import { ReclamationDetailsComponent } from '../components/reclamation-details/reclamation-details.component';
import { ReclamationFormComponent } from '../components/reclamation-form/reclamation-form.component';
import { ReclamationService } from '../services/reclamation.service';

@NgModule({
  declarations: [
    // ReclamationsComponent,
    // ReclamationDetailsComponent,
    // ReclamationFormComponent
  ],
  imports: [
    ReclamationsComponent,
    ReclamationDetailsComponent,
    ReclamationFormComponent,
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'reclamations', component: ReclamationsComponent },
      { path: 'reclamations/:id', component: ReclamationDetailsComponent },
      { path: 'creer-reclamation', component: ReclamationFormComponent },
      { path: 'modifier-reclamation/:id', component: ReclamationFormComponent },
    ]),
  ],
  providers: [ReclamationService],
  exports: [],
})
export class ReclamationModule {}
