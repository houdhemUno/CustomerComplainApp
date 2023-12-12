import { Component,OnInit } from '@angular/core';
import{HighchartsChartModule } from 'highcharts-angular';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [HighchartsChartModule],
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.scss'
})
export class BarChartComponent implements OnInit {
  chartOptions= {};

  Highcharts = Highcharts;

  constructor (){ }

  ngOnInit() {
    this.chartOptions ={
    chart: {
        type: 'column'
    },
    title: {
        text: 'Nombre de réclamations par secteur et par région',
        align: 'left'
    },
    
    xAxis: {
        categories: ['Région1', 'Région2', 'Région3', 'Région4', 'Région5'],
        crosshair: true,
        accessibility: {
            description: 'régions'
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Nombre de réclamations'
        }
    },
    tooltip: {
        valueSuffix: ' réclamations'
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [
        {
            name: 'Secteur1',
            data: [40, 26, 10, 68, 27, 14]
        },
        {
            name: 'Secteur2',
            data: [86, 36, 55, 41, 71, 77]
        }
    ]
}};

}
