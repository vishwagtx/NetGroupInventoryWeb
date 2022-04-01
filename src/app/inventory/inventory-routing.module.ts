import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoriesComponent } from './inventories/inventories.component';
import { InventoryComponent } from './inventory.component';
import { ItemsComponent } from './items/items.component';
import { ViewItemComponent } from './items/view-item/view-item.component';
import { StorageLevelsComponent } from './storage-levels/storage-levels.component';

const routes: Routes = [
  {
    path: '',
    component: InventoryComponent,
    children: [
      { path: 'storage-levels', component: StorageLevelsComponent },
      { path: 'items', component: ItemsComponent },
      { path: 'items/:id', component: ViewItemComponent },
      { path: '', component: InventoriesComponent },
      { path: 'inventories', component: InventoriesComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventoryRoutingModule {}
