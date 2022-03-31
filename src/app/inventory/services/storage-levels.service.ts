import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IStorageLevel } from '../dtos/storage-level';

@Injectable()
export class StorageLevelsService {
  private baseUrl = environment.apiURL;

  constructor(private http: HttpClient) {}

  create(level: IStorageLevel): Observable<any> {
    return this.http.post(`${this.baseUrl}api/StorageLevels`, level);
  }

  get(): Observable<Array<IStorageLevel>> {
    return this.http.get<Array<IStorageLevel>>(
      `${this.baseUrl}api/StorageLevels`
    );
  }
}
