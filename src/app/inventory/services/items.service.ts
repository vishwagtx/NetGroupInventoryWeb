import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
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
}
