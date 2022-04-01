import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { of } from 'rxjs';
import { InventoriesService } from '../services/inventories.service';

import { InventoriesComponent } from './inventories.component';

describe('InventoriesComponent', () => {
  let component: InventoriesComponent;
  let fixture: ComponentFixture<InventoriesComponent>;
  let dialogRefSpyObj = jasmine.createSpyObj({
    afterClosed: of({}),
    close: null,
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        InventoriesService,
        { provide: MatDialog, useValue: dialogRefSpyObj },
      ],
      declarations: [InventoriesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
