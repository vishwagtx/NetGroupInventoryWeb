import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { of } from 'rxjs';
import { StorageLevelsService } from '../services/storage-levels.service';
import { StorageLevelsComponent } from './storage-levels.component';

describe('StorageLevelsComponent', () => {
  let component: StorageLevelsComponent;
  let fixture: ComponentFixture<StorageLevelsComponent>;
  let dialogRefSpyObj = jasmine.createSpyObj({
    afterClosed: of({}),
    close: null,
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        StorageLevelsService,
        { provide: MatDialog, useValue: dialogRefSpyObj },
      ],
      declarations: [StorageLevelsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StorageLevelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
