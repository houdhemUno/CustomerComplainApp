import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { MainComponent } from '../main/main.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HighchartsChartModule } from 'highcharts-angular';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-rapport',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,SidebarComponent,MainComponent,MatSidenavModule,HighchartsChartModule,MatDividerModule],
  templateUrl: './rapport.component.html',
  styleUrl: './rapport.component.scss'
})
export class RapportComponent implements OnInit {
  sideBarOpen = true;

  constructor() { }

  ngOnInit() { }


  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
