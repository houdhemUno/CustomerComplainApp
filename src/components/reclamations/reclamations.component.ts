import { CommonModule } from '@angular/common';
import { ReclamationDetailsComponent } from '../reclamation-details/reclamation-details.component';
import { ReclamationRechercheComponent } from '../reclamation-recherche/reclamation-recherche.component';
import { ReclamationTableComponent } from '../reclamation-table/reclamation-table.component';
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { MainComponent } from '../main/main.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HighchartsChartModule } from 'highcharts-angular';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-reclamations',
  standalone: true,
  imports: [
    CommonModule,
    ReclamationDetailsComponent,
    ReclamationRechercheComponent,
    ReclamationTableComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    MainComponent,
    MatSidenavModule,
    HighchartsChartModule,
    MatDividerModule,
  
    ReclamationsComponent,
    ReclamationDetailsComponent,
    ReclamationRechercheComponent,
    ReclamationTableComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    MainComponent,
  ],
  templateUrl: './reclamations.component.html',
  styleUrls: ['./reclamations.component.scss'],
})
export class ReclamationsComponent implements OnInit {

  sideBarToggler() {
  }

  sideBarOpen: boolean = true; 


  ngOnInit() {

  }
}
