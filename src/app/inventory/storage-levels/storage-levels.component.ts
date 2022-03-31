import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IStorageLevel } from '../dtos/storage-level';
import { StorageLevelsService } from '../services/storage-levels.service';

@Component({
  selector: 'app-storage-levels',
  templateUrl: './storage-levels.component.html',
  styleUrls: ['./storage-levels.component.scss'],
})
export class StorageLevelsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'description'];

  storageLevels$: Observable<Array<IStorageLevel>>;

  constructor(private storageLevelsService: StorageLevelsService) {
    this.storageLevels$ = this.storageLevelsService.get();
  }

  ngOnInit(): void {}
}
