import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IReponse } from 'src/app/shared/models/response';
import { environment } from 'src/environments/environment';
import { IInventory, IViewInventory } from '../models/inventory';

@Injectable()
export class InventoriesService {
  private baseUrl = environment.apiURL;

  constructor(private http: HttpClient) {}

  search(keyword: string | null): Observable<Array<IViewInventory>> {
    return this.http.get<Array<IViewInventory>>(
      `${this.baseUrl}api/Inventories/search${keyword ? '/' + keyword : ''}`
    );
  }

  create(inventory: IInventory): Observable<IReponse<number>> {
    return this.http.post<IReponse<number>>(
      `${this.baseUrl}api/Inventories`,
      inventory
    );
  }

  update(inventory: IInventory): Observable<IReponse<number>> {
    return this.http.put<IReponse<number>>(
      `${this.baseUrl}api/Inventories`,
      inventory
    );
  }

  get(id: number): Observable<IViewInventory> {
    return this.http.get<IViewInventory>(
      `${this.baseUrl}api/Inventories/${id}`
    );
  }
}
