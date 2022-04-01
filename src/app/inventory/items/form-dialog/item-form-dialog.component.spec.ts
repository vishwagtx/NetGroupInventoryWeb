import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemFormDialogComponent } from './item-form-dialog.component';

describe('ItemFormDialogComponent', () => {
  let component: ItemFormDialogComponent;
  let fixture: ComponentFixture<ItemFormDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemFormDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
