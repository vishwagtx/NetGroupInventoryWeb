import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IReponse } from 'src/app/shared/models/response';
import { environment } from 'src/environments/environment';
import { IStorageLevel } from '../models/storage-level';

@Injectable()
export class StorageLevelsService {
  private baseUrl = environment.apiURL;

  constructor(private http: HttpClient) {}

  create(level: IStorageLevel): Observable<IReponse<number>> {
    return this.http.post<IReponse<number>>(
      `${this.baseUrl}api/StorageLevels`,
      level
    );
  }

  update(level: IStorageLevel): Observable<IReponse<number>> {
    return this.http.put<IReponse<number>>(
      `${this.baseUrl}api/StorageLevels`,
      level
    );
  }

  search(keyword: string | null): Observable<Array<IStorageLevel>> {
    return this.http.get<Array<IStorageLevel>>(
      `${this.baseUrl}api/StorageLevels/search${keyword ? '/' + keyword : ''}`
    );
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}api/StorageLevels/${id}`);
  }
}
