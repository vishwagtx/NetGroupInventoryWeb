import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { IStorageLevel } from '../models/storage-level';
import { StorageLevelsService } from '../services/storage-levels.service';
import { StorageLevelFormComponent } from './form-dialog/storage-level-form.component';

@Component({
  selector: 'app-storage-levels',
  templateUrl: './storage-levels.component.html',
  styleUrls: ['./storage-levels.component.scss'],
})
export class StorageLevelsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'description', 'actions'];

  storageLevels$: Observable<Array<IStorageLevel>> | undefined;

  constructor(
    private storageLevelsService: StorageLevelsService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getStorageLevels(null);
  }

  add() {
    this.openLevelDialog(null);
  }

  edit(level: IStorageLevel) {
    this.openLevelDialog(level);
  }

  search(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.getStorageLevels(value);
  }

  private openLevelDialog(level: IStorageLevel | null) {
    const dialogRef = this.dialog.open(StorageLevelFormComponent, {
      data: level,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) this.getStorageLevels(null);
    });
  }

  private getStorageLevels(keyword: string | null) {
    this.storageLevels$ = this.storageLevelsService
      .search(keyword)
      .pipe(debounceTime(2000));
  }
}
