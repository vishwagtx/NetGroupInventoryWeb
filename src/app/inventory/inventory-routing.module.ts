import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryComponent } from './inventory.component';
import { StorageLevelFormComponent } from './storage-levels/storage-level-form/storage-level-form.component';

const routes: Routes = [{ path: '', component: StorageLevelFormComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventoryRoutingModule {}
