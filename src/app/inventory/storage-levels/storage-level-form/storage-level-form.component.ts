import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { IStorageLevel } from '../../dtos/storage-level';
import { StorageLevelsService } from '../../services/storage-levels.service';

@Component({
  selector: 'app-storage-level-form',
  templateUrl: './storage-level-form.component.html',
  styleUrls: ['./storage-level-form.component.scss'],
})
export class StorageLevelFormComponent implements OnInit {
  levelForm: FormGroup;

  constructor(private storageService: StorageLevelsService) {
    this.levelForm = new FormGroup({
      level: new FormControl('', {
        validators: [Validators.maxLength(250), Validators.required],
      }),
      description: new FormControl(''),
    });
  }

  get level(): AbstractControl {
    return this.levelForm.controls.level;
  }

  get description(): AbstractControl {
    return this.levelForm.controls.description;
  }

  ngOnInit(): void {}

  save(event: Event): void {
    event.preventDefault();

    alert(this.levelForm.valid);

    const level = {
      level: this.level.value,
      description: this.description.value,
    } as IStorageLevel;

    this.storageService.create(level).subscribe();
  }
}
