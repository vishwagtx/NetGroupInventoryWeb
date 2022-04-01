import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { IInventory, IViewInventory } from '../../models/inventory';
import { InventoriesService } from '../../services/inventories.service';
import { InventoryFormDialogComponent } from '../form-dialog/inventory-form-dialog.component';

@Component({
  selector: 'app-view-inventory',
  templateUrl: './view-inventory.component.html',
  styleUrls: ['./view-inventory.component.scss'],
})
export class ViewInventoryComponent implements OnInit {
  item$: Observable<IViewInventory> | undefined;
  private id: number | null = null;

  constructor(
    private inventoriesService: InventoriesService,
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
      switchMap((id) => this.inventoriesService.get(id))
    );
  }

  edit(item: IInventory) {
    this.openItemDialog(item);
  }

  private openItemDialog(item: IInventory | null) {
    const dialogRef = this.dialog.open(InventoryFormDialogComponent, {
      data: item,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.item$ = this.inventoriesService.get(this.id as number);
      }
    });
  }
}
