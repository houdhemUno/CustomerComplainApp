import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RapportComponent } from '../../Components/rapport/rapport.component';
import { HeaderComponent } from '../../Components/header/header.component';
import { FooterComponent } from '../../Components/footer/footer.component';
import { SidebarComponent } from '../../Components/sidebar/sidebar.component';
import { MainComponent } from '../../Components/main/main.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import{FlexLayoutModule} from '@angular/flex-layout';
import { AreaComponent } from '../../Components/widgets/area/area.component';
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  declarations: [RapportComponent,HeaderComponent,FooterComponent, SidebarComponent,MainComponent,AreaComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatDividerModule,
    MatCardModule,
    FlexLayoutModule,
    HighchartsChartModule
  ]
})
export class RapportModule { }
