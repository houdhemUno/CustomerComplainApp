import { Component,OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import{HighchartsChartModule } from 'highcharts-angular';
@Component({
  selector: 'app-area',
  standalone: true,
  imports: [HighchartsChartModule],
  templateUrl: './area.component.html',
  styleUrl: './area.component.scss'
})
export class AreaComponent implements OnInit {
 
  chartOptions= {};

  Highcharts = Highcharts;

  constructor (){
    
  }

  ngOnInit() {
   
   // Data retrieved from https://fas.org/issues/nuclear-weapons/status-world-nuclear-forces/
    this.chartOptions ={
    chart: {
      type: 'area'
  },
  //accessibility: {
      //description: 'Image description: An area chart compares the nuclear stockpiles of the USA and the USSR/Russia between 1945 and 2017. The number of nuclear weapons is plotted on the Y-axis and the years on the X-axis. The chart is interactive, and the year-on-year stockpile levels can be traced for each country. The US has a stockpile of 6 nuclear weapons at the dawn of the nuclear age in 1945. This number has gradually increased to 369 by 1950 when the USSR enters the arms race with 6 weapons. At this point, the US starts to rapidly build its stockpile culminating in 32,040 warheads by 1966 compared to the USSR’s 7,089. From this peak in 1966, the US stockpile gradually decreases as the USSR’s stockpile expands. By 1978 the USSR has closed the nuclear gap at 25,393. The USSR stockpile continues to grow until it reaches a peak of 45,000 in 1986 compared to the US arsenal of 24,401. From 1986, the nuclear stockpiles of both countries start to fall. By 2000, the numbers have fallen to 10,577 and 21,000 for the US and Russia, respectively. The decreases continue until 2017 at which point the US holds 4,018 weapons compared to Russia’s 4,500.'
  //},
  title: {
      text: 'Variation des réclamations Type1 et type2  '
  },
  //subtitle: {
    //  text: 'Source: <a href="https://fas.org/issues/nuclear-weapons/status-world-nuclear-forces/" ' +
         // 'target="_blank">FAS</a>'
  //},
  xAxis: {
      allowDecimals: false,
      accessibility: {
          rangeDescription: 'Range: 2000 to 2017.'
      }
  },
  yAxis: {

    
    title: {
          text: 'Nombre de réclamations'
      }
  },
  tooltip: {
      pointFormat: '{series.name} a été réclamées <b>{point.y:,.0f}</b><br/>fois en {point.x}'
  },
  plotOptions: {
      area: {
          pointStart: 2000,
          marker: {
              enabled: false,
              symbol: 'circle',
              radius: 2,
              states: {
                  hover: {
                      enabled: true
                  }
              }
          }
      }
  },
  series: [{
      name: 'type1',
      data: [
          null, null, null, null, null, 2, 9, 13, 50, 170, 299, 438, 841,5240,3805,
          3750, 3708, 3708 , 
      ]
  }, {
      name: 'type 2',
      data: [null, null, null, null, null,1, 5, 25, 50, 120, 150, 200, 426, 660, 863,
         1048, 1627, 2492,
      ]
  }],
  
}};

  }

