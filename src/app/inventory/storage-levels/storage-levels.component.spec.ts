import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorageLevelsComponent } from './storage-levels.component';

describe('StorageLevelsComponent', () => {
  let component: StorageLevelsComponent;
  let fixture: ComponentFixture<StorageLevelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorageLevelsComponent ]
    })
    .compileComponents();
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
