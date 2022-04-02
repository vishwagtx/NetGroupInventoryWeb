import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IStatisticReponse } from '../models/statistic';

@Injectable()
export class StatisticService {
  private baseUrl = environment.apiURL;

  constructor(private http: HttpClient) {}

  get(): Observable<IStatisticReponse> {
    return this.http.get<IStatisticReponse>(`${this.baseUrl}api/Statistics`);
  }
}
