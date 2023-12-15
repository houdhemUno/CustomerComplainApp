import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RapportComponent } from '../../components/rapport/rapport.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { MainComponent } from '../../components/main/main.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import{FlexLayoutModule} from '@angular/flex-layout';
import { AreaComponent } from '../../components/widgets/area/area.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { HttpClientModule } from '@angular/common/http';
import { RapportsComponent } from '../../components/rapports/rapports.component';
import { RapportService } from '../../services/rapport.service';

@NgModule({
  declarations: [RapportComponent,HeaderComponent,FooterComponent, SidebarComponent,MainComponent,AreaComponent, RapportsComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatDividerModule,
    MatCardModule,
    FlexLayoutModule,
    HighchartsChartModule,
    HttpClientModule
  ],
  providers: [RapportService]
})
export class RapportModule { }
