import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { IViewInventory } from '../models/inventory';
import { InventoriesService } from '../services/inventories.service';

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

  constructor(private inventoriesService: InventoriesService) {}

  ngOnInit(): void {
    this.getItems(null);
  }

  private getItems(keyword: string | null) {
    this.items$ = this.inventoriesService
      .search(keyword)
      .pipe(distinctUntilChanged(), debounceTime(3000));
  }
}
