import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { of } from 'rxjs';
import { UploadService } from 'src/app/core/services/upload.service';
import { ItemsService } from '../../services/items.service';
import { IReponse } from 'src/app/shared/models/response';
import { ItemFormDialogComponent } from './item-form-dialog.component';
import { IItem } from '../../models/item';

describe('ItemFormDialogComponent', () => {
  let component: ItemFormDialogComponent;
  let fixture: ComponentFixture<ItemFormDialogComponent>;
  let matDialogRefSpy = jasmine.createSpyObj({
    close: () => true,
  });
  let itemsService: ItemsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: MatDialogRef, useValue: matDialogRefSpy },
        { provide: MAT_DIALOG_DATA, useValue: null },
        ItemsService,
        UploadService,
      ],
      declarations: [ItemFormDialogComponent],
    }).compileComponents();

    itemsService = TestBed.inject(ItemsService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('save ', () => {
    beforeEach(() => {
      component.itemForm.controls.title.setValue('Test');
      component.itemForm.controls.categoryId.setValue(1);
    });

    it('should be called create function when data is null', () => {
      const spy = spyOn(itemsService, 'create');
      spy.and.returnValue(of({ succeed: true } as IReponse<number>));

      component.save({ preventDefault: () => {} } as Event);

      expect(spy).toHaveBeenCalled();
    });

    it('should be called update function when data is not null', () => {
      component.data = { id: 1 } as IItem;

      const spy = spyOn(itemsService, 'update');
      spy.and.returnValue(of({ succeed: true } as IReponse<number>));

      component.save({ preventDefault: () => {} } as Event);

      expect(spy).toHaveBeenCalled();
    });
  });
});
