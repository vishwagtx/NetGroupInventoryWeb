import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InventoriesService } from '../../services/inventories.service';
import { ItemsService } from '../../services/items.service';
import { StorageLevelsService } from '../../services/storage-levels.service';
import { InventoryFormDialogComponent } from './inventory-form-dialog.component';

describe('InventoryFormDialogComponent', () => {
  let component: InventoryFormDialogComponent;
  let fixture: ComponentFixture<InventoryFormDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} },
        ItemsService,
        StorageLevelsService,
        InventoriesService,
      ],
      declarations: [InventoryFormDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
