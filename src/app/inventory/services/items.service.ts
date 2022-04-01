import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IReponse } from 'src/app/shared/models/response';
import { environment } from 'src/environments/environment';
import { IItem, IViewItem } from '../models/item';
import { IItemCategory } from '../models/item-category';

@Injectable()
export class ItemsService {
  private baseUrl = environment.apiURL;

  constructor(private http: HttpClient) {}

  getCategories(): Observable<Array<IItemCategory>> {
    return this.http.get<Array<IItemCategory>>(
      `${this.baseUrl}api/ItemCategories`
    );
  }

  search(keyword: string | null): Observable<Array<IViewItem>> {
    return this.http.get<Array<IViewItem>>(
      `${this.baseUrl}api/Items/search${keyword ? '/' + keyword : ''}`
    );
  }

  create(level: IItem): Observable<IReponse<number>> {
    return this.http.post<IReponse<number>>(`${this.baseUrl}api/Items`, level);
  }

  update(level: IItem): Observable<IReponse<number>> {
    return this.http.put<IReponse<number>>(`${this.baseUrl}api/Items`, level);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}api/Items/${id}`);
  }

  get(id: number): Observable<IViewItem> {
    return this.http.get<IViewItem>(`${this.baseUrl}api/Items/${id}`);
  }
}
