import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IViewInventory } from '../models/inventory';

@Injectable()
export class InventoriesService {
  private baseUrl = environment.apiURL;

  constructor(private http: HttpClient) {}

  search(keyword: string | null): Observable<Array<IViewInventory>> {
    return this.http.get<Array<IViewInventory>>(
      `${this.baseUrl}api/Inventories/search${keyword ? '/' + keyword : ''}`
    );
  }
}
