import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryComponent } from './inventory.component';
import { StorageLevelFormComponent } from './storage-levels/form-dialog/storage-level-form.component';
import { StorageLevelsComponent } from './storage-levels/storage-levels.component';

const routes: Routes = [
  {
    path: '',
    component: InventoryComponent,
    children: [{ path: 'storage-levels', component: StorageLevelsComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventoryRoutingModule {}
