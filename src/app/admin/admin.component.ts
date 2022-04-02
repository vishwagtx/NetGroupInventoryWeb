import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IStatisticReponse, IUserStatistic } from './models/statistic';
import { StatisticService } from './services/statistic.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  displayedColumns: string[] = ['user', 'chart'];
  top5displayedColumns: string[] = ['user', 'last active date'];
  pieChartData: any;

  statistics$: Observable<IStatisticReponse> | undefined;

  constructor(private statisticService: StatisticService) {}

  ngOnInit() {
    this.statistics$ = this.statisticService.get().pipe(
      tap((response) => {
        this.generateOverallPieChart(response.userStatistics);
      })
    );
  }

  generateOverallPieChart(userInfos: Array<IUserStatistic>) {
    this.pieChartData = {
      labels: userInfos.filter((f) => f.inventoryCount > 0).map((m) => m.name),
      datasets: [
        {
          data: userInfos
            .filter((f) => f.inventoryCount > 0)
            .map((m) => ({ id: m.userId, value: m.inventoryCount })),
          parsing: {
            id: 'id',
            key: 'value',
          },
        },
      ],
    };
  }
}
