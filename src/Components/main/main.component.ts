import { Component } from '@angular/core';
import { AreaComponent } from '../widgets/area/area.component';
import { HighchartsChartModule } from 'highcharts-angular';
import * as Highcharts from 'highcharts';
import { MatDividerModule } from '@angular/material/divider';
import {  MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PieChartComponent } from '../widgets/pie-chart/pie-chart.component'; 
import { BarChartComponent } from '../widgets/bar-chart/bar-chart.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [AreaComponent,HighchartsChartModule,MatDividerModule,MatCardModule,FlexLayoutModule,PieChartComponent,BarChartComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
