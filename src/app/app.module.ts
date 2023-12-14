import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
 // Import the main routing module

import { ReclamationModule } from '../modules/reclamation.module';
import { UserModule } from '../modules/user.module';
import { AuthModule } from '../modules/auth.module';
import { StatisticsModule } from '../modules/statistics.module';
import { DashboardModule } from '../modules/dashboard.module';
import { ReportsModule } from '../modules/reports.module';
import { ManagementModule } from '../modules/management.module';
import { ValidationModule } from '../modules/validation.module';
import { HistoryModule } from '../modules/history.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    // AppComponent
  ],
  imports: [
    AppComponent,
    BrowserModule,
     // Include the main routing module
    ReclamationModule,
    UserModule,
    AuthModule,
    StatisticsModule,
    DashboardModule,
    ReportsModule,
    ManagementModule,
    ValidationModule,
    HistoryModule,
  ],
})
export class AppModule { }
