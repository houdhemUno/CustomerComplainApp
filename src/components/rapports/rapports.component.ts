import { Component, OnInit } from '@angular/core';
import { RapportService } from '../../services/rapport.service';
import { Rapport } from '../../models/rapport.model';

@Component({
  selector: 'app-rapports',
  templateUrl: './rapports.component.html',
  styleUrls: ['./rapports.component.scss'],
})
export class RapportsComponent implements OnInit {
  rapports: Rapport[] = [];

  constructor(private rapportService: RapportService) {}

  ngOnInit(): void {
    this.retrieveRapports();
  }

  retrieveRapports(): void {
    this.rapportService.getAllRapports().subscribe(
      (data) => {
        this.rapports = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
