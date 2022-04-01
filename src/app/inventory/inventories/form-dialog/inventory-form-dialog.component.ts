import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { IInventory } from '../../models/inventory';
import { IItem, IViewItem } from '../../models/item';
import { IItemCategory } from '../../models/item-category';
import { IStorageLevel } from '../../models/storage-level';
import { InventoriesService } from '../../services/inventories.service';
import { ItemsService } from '../../services/items.service';
import { StorageLevelsService } from '../../services/storage-levels.service';

@Component({
  selector: 'app-inventory-form-dialog',
  templateUrl: './inventory-form-dialog.component.html',
  styleUrls: ['./inventory-form-dialog.component.scss'],
})
export class InventoryFormDialogComponent implements OnInit {
  inventoryForm: FormGroup;
  titleLabel: string;
  items$: Observable<Array<IViewItem>> | undefined;
  storageLevels$: Observable<Array<IStorageLevel>> | undefined;

  constructor(
    public dialogRef: MatDialogRef<InventoryFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IInventory,
    private itemsService: ItemsService,
    private storageLevelsService: StorageLevelsService,
    private inventoriesService: InventoriesService
  ) {
    this.inventoryForm = new FormGroup({
      storageLevelId: new FormControl(null, Validators.required),
      itemId: new FormControl(null, Validators.required),
      quantity: new FormControl(null),
      serialNumber: new FormControl(null),
      note: new FormControl(null, [Validators.maxLength(3000)]),
    });

    this.titleLabel = !!data ? 'Edit' : 'Create';
  }

  get storageLevelId(): FormControl {
    return this.inventoryForm.controls.storageLevelId as FormControl;
  }

  get itemId(): FormControl {
    return this.inventoryForm.controls.itemId as FormControl;
  }

  ngOnInit(): void {
    this.items$ = this.itemsService.search(null);
    this.storageLevels$ = this.storageLevelsService.search(null);

    if (this.data) {
      this.inventoryForm.controls.storageLevelId.setValue(
        this.data.storageLevelId
      );
      this.inventoryForm.controls.itemId.setValue(this.data.itemId);
      this.inventoryForm.controls.quantity.setValue(this.data.quantity);
      this.inventoryForm.controls.serialNumber.setValue(this.data.serialNumber);
      this.inventoryForm.controls.note.setValue(this.data.note);
    }
  }

  save(event: Event) {
    event.preventDefault();

    if (this.inventoryForm.invalid) return;

    const item = {
      id: !!this.data ? this.data.id : null,
      itemId: Number(this.inventoryForm.controls.itemId.value),
      storageLevelId: Number(this.inventoryForm.controls.storageLevelId.value),
      quantity: this.inventoryForm.controls.quantity.value
        ? Number(this.inventoryForm.controls.quantity.value)
        : null,
      serialNumber: this.inventoryForm.controls.serialNumber.value,
      note: this.inventoryForm.controls.note.value,
    } as IInventory;

    (!this.data
      ? this.inventoriesService.create(item)
      : this.inventoriesService.update(item)
    )
      .pipe(debounceTime(3000))
      .subscribe((response) => {
        if (response.succeed)
          this.dialogRef.close(response.id ?? response.succeed);
      });
  }

  cancel() {
    this.dialogRef.close();
  }
}
