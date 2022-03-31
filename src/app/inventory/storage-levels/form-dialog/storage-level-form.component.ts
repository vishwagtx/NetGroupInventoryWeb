import { Component, Inject, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { IStorageLevel } from '../../models/storage-level';
import { StorageLevelsService } from '../../services/storage-levels.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-storage-level-form',
  templateUrl: './storage-level-form.component.html',
  styleUrls: ['./storage-level-form.component.scss'],
})
export class StorageLevelFormComponent implements OnInit {
  levelForm: FormGroup;
  titleLabel: string;

  constructor(
    public dialogRef: MatDialogRef<StorageLevelFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IStorageLevel,
    private storageService: StorageLevelsService
  ) {
    this.levelForm = new FormGroup({
      level: new FormControl('', {
        validators: [Validators.maxLength(250), Validators.required],
      }),
      description: new FormControl(''),
    });

    this.titleLabel = !!data ? 'Edit' : 'Create';
  }

  get level(): AbstractControl {
    return this.levelForm.controls.level;
  }

  get description(): AbstractControl {
    return this.levelForm.controls.description;
  }

  ngOnInit(): void {
    if (this.data) {
      this.level.setValue(this.data.level);
      this.description.setValue(this.data.description);
    }
  }

  save(event: Event): void {
    event.preventDefault();

    const level = {
      id: !!this.data ? this.data.id : null,
      level: this.level.value,
      description: this.description.value,
    } as IStorageLevel;

    (!this.data
      ? this.storageService.create(level)
      : this.storageService.update(level)
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
