import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { IItem } from '../models/item';
import { ItemsService } from '../services/items.service';
import { ItemFormDialogComponent } from './item-form-dialog/item-form-dialog.component';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {
  displayedColumns: string[] = [
    'title',
    'category',
    'description',
    'image',
    'actions',
  ];

  items$: Observable<Array<IItem>> | undefined;

  constructor(private itemsService: ItemsService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.getItems(null);
  }

  add() {
    this.openItemDialog(null);
  }

  edit(item: IItem) {
    this.openItemDialog(item);
  }

  search(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.getItems(value);
  }

  private getItems(keyword: string | null) {
    this.items$ = this.itemsService
      .search(keyword)
      .pipe(distinctUntilChanged(), debounceTime(3000));
  }

  private openItemDialog(item: IItem | null) {
    const dialogRef = this.dialog.open(ItemFormDialogComponent, {
      data: item,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) this.getItems(null);
    });
  }
}
