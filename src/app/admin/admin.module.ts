import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { NgChartsModule } from 'ng2-charts';
import { StatisticService } from './services/statistic.service';
import { SharedModule } from '../shared/shared.module';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppHttpInterceptor } from '../shared/interceptors/app-http-interceptor';

@NgModule({
  declarations: [AdminComponent, PieChartComponent],
  imports: [CommonModule, SharedModule, AdminRoutingModule, NgChartsModule],
  providers: [
    StatisticService,
    { provide: HTTP_INTERCEPTORS, useClass: AppHttpInterceptor, multi: true },
  ],
})
export class AdminModule {}
