import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { IInventory, IViewInventory } from '../models/inventory';
import { InventoriesService } from '../services/inventories.service';
import { InventoryFormDialogComponent } from './form-dialog/inventory-form-dialog.component';

@Component({
  selector: 'app-inventories',
  templateUrl: './inventories.component.html',
  styleUrls: ['./inventories.component.scss'],
})
export class InventoriesComponent implements OnInit {
  displayedColumns: string[] = [
    'storage level',
    'item',
    'quantity',
    'serial number',
    'image',
    'actions',
  ];

  items$: Observable<Array<IViewInventory>> | undefined;

  constructor(
    private inventoriesService: InventoriesService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getItems(null);
  }

  add() {
    this.openItemDialog(null);
  }

  edit(item: IInventory) {
    this.openItemDialog(item);
  }

  search(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.getItems(value);
  }

  private getItems(keyword: string | null) {
    this.items$ = this.inventoriesService
      .search(keyword)
      .pipe(distinctUntilChanged(), debounceTime(3000));
  }

  private openItemDialog(item: IInventory | null) {
    const dialogRef = this.dialog.open(InventoryFormDialogComponent, {
      data: item,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) this.getItems(null);
    });
  }
}
