import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryComponent } from './inventory.component';
import { ItemsComponent } from './items/items.component';
import { StorageLevelsComponent } from './storage-levels/storage-levels.component';

const routes: Routes = [
  {
    path: '',
    component: InventoryComponent,
    children: [
      { path: 'storage-levels', component: StorageLevelsComponent },
      { path: 'items', component: ItemsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventoryRoutingModule {}
