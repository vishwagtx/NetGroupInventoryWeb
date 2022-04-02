import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { IUserStatistic } from '../models/statistic';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent implements OnInit, OnChanges {
  @Input() userStatistic: IUserStatistic | undefined;

  pieChartData: any;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    const userStatistiChange = changes.userStatistic;
    if (userStatistiChange) {
      this.setPieChartValues();
    }
  }

  ngOnInit(): void {}

  setPieChartValues(): void {
    this.pieChartData = {
      labels: ['Storage Level Count', 'Item count', 'Inventory Item count'],
      datasets: [
        {
          data: [
            {
              id: 'Storage Level Count',
              value: this.userStatistic?.storageLevelCount,
            },
            { id: 'Item count', value: this.userStatistic?.itemCount },
            {
              id: 'Inventory Item count',
              value: this.userStatistic?.inventoryCount,
            },
          ],
          parsing: {
            id: 'id',
            key: 'value',
          },
        },
      ],
    };
  }
}
