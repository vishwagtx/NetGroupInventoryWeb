import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { IItem } from '../models/item';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {
  displayedColumns: string[] = ['title', 'category', 'description', 'actions'];

  items$: Observable<Array<IItem>> | undefined;

  constructor(private itemsService: ItemsService) {}

  ngOnInit(): void {
    this.getItems(null);
  }

  add() {}

  edit(item: IItem) {}

  private getItems(keyword: string | null) {
    this.items$ = this.itemsService.search(keyword).pipe(debounceTime(2000));
  }
}
