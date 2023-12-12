import { Component,OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import{HighchartsChartModule } from 'highcharts-angular';
@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [HighchartsChartModule ],
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.scss'
})
export class PieChartComponent implements OnInit {
  chartOptions= {};

  Highcharts = Highcharts;

  constructor (){}
  ngOnInit() {
    this.chartOptions ={
    chart: {

        type: 'pie'
    },
    title: {
        text: 'Décomposition de réclamations '
    },
    tooltip: {
        valueSuffix: '%'
    },
    
    plotOptions: {
        series: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: [{
                enabled: true,
                distance: 20
            }, {
                enabled: true,
                distance: -40,
                format: '{point.percentage:.1f}%',
                style: {
                    fontSize: '1.2em',
                    textOutline: 'none',
                    opacity: 0.7
                },
                filter: {
                    operator: '>',
                    property: 'percentage',
                    value: 10
                }
            }]
        }
    },
    series: [
        {
            name: 'Percentage',
            colorByPoint: true,
            data: [
                {
                    name: 'traitées',
                    y: 55.02
                },
                {
                    name: 'en cours de traitement',
                    sliced: true,
                    selected: true,
                    y: 26.71
                },
                {
                    name: 'rejetées',
                    sliced: true,
                    selected: true,
                    y: 1.09
                }
               
                
            ]
        }
    ]
}};

}
