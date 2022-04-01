import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, switchMap, tap } from 'rxjs/operators';
import { IItem, IViewItem } from '../../models/item';
import { ItemsService } from '../../services/items.service';
import { ItemFormDialogComponent } from '../form-dialog/item-form-dialog.component';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.scss'],
})
export class ViewItemComponent implements OnInit {
  item$: Observable<IViewItem> | undefined;
  private id: number | null = null;

  constructor(
    private itemsService: ItemsService,
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.item$ = this.activatedRoute.paramMap.pipe(
      filter((f) => !!f.get('id')),
      map((m) => {
        const id = Number(m.get('id'));
        this.id = id;
        return id;
      }),
      switchMap((id) => this.itemsService.get(id))
    );
  }

  edit(item: IItem) {
    this.openItemDialog(item);
  }

  private openItemDialog(item: IItem | null) {
    const dialogRef = this.dialog.open(ItemFormDialogComponent, {
      data: item,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.item$ = this.itemsService.get(this.id as number);
      }
    });
  }
}
