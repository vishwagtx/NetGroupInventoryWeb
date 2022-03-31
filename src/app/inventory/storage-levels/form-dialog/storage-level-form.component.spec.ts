import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorageLevelFormComponent } from './storage-level-form.component';

describe('StorageLevelFormComponent', () => {
  let component: StorageLevelFormComponent;
  let fixture: ComponentFixture<StorageLevelFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorageLevelFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StorageLevelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
