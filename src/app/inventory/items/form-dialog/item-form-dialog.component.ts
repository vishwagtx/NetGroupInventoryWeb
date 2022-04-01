import { Component, Inject, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { UploadService } from 'src/app/core/services/upload.service';
import { IItem } from '../../models/item';
import { IItemCategory } from '../../models/item-category';
import { ItemsService } from '../../services/items.service';

@Component({
  selector: 'app-item-form-dialog',
  templateUrl: './item-form-dialog.component.html',
  styleUrls: ['./item-form-dialog.component.scss'],
})
export class ItemFormDialogComponent implements OnInit {
  itemForm: FormGroup;
  titleLabel: string;
  categories$: Observable<Array<IItemCategory>> | undefined;
  imageUrl: string | null = null;

  constructor(
    public dialogRef: MatDialogRef<ItemFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IItem,
    private itemsService: ItemsService,
    private uploadService: UploadService
  ) {
    this.itemForm = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
        Validators.maxLength(200),
      ]),
      categoryId: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.maxLength(3000)),
    });

    this.titleLabel = !!data ? 'Edit' : 'Create';
  }

  get categoryId(): FormControl {
    return this.itemForm.controls.categoryId as FormControl;
  }

  ngOnInit(): void {
    this.categories$ = this.itemsService.getCategories();

    if (this.data) {
      this.itemForm.controls.title.setValue(this.data.title);
      this.itemForm.controls.categoryId.setValue(this.data.categoryId);
      this.itemForm.controls.description.setValue(this.data.description);
      this.imageUrl = this.data.imageUrl;
    }
  }

  save(event: Event) {
    event.preventDefault();

    if (this.itemForm.invalid) return;

    const item = {
      id: !!this.data ? this.data.id : null,
      title: this.itemForm.controls.title.value,
      categoryId: Number(this.itemForm.controls.categoryId.value),
      description: this.itemForm.controls.description.value,
      imageUrl: this.imageUrl,
    } as IItem;

    (!this.data
      ? this.itemsService.create(item)
      : this.itemsService.update(item)
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

  uploadImage(event: any) {
    const file = event.target.files[0];

    this.uploadService.upload(file).subscribe((reponse) => {
      this.imageUrl = reponse.uploadedUrl;
    });
  }
}
