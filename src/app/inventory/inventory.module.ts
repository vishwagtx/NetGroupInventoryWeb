import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryComponent } from './inventory.component';
import { ItemsService } from './services/items.service';
import { StorageLevelFormComponent } from './storage-levels/form-dialog/storage-level-form.component';
import { SharedModule } from '../shared/shared.module';
import { StorageLevelsService } from './services/storage-levels.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppHttpInterceptor } from '../shared/interceptors/app-http-interceptor';
import { StorageLevelsComponent } from './storage-levels/storage-levels.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { ItemsComponent } from './items/items.component';
import { ItemFormDialogComponent } from './items/form-dialog/item-form-dialog.component';
import { ViewItemComponent } from './items/view-item/view-item.component';
import { InventoriesComponent } from './inventories/inventories.component';
import { InventoriesService } from './services/inventories.service';
import { InventoryFormDialogComponent } from './inventories/form-dialog/inventory-form-dialog.component';
import { ViewInventoryComponent } from './inventories/view-inventory/view-inventory.component';

@NgModule({
  declarations: [
    InventoryComponent,
    StorageLevelFormComponent,
    StorageLevelsComponent,
    LeftMenuComponent,
    ItemsComponent,
    ItemFormDialogComponent,
    ViewItemComponent,
    InventoriesComponent,
    InventoryFormDialogComponent,
    ViewInventoryComponent,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AppHttpInterceptor, multi: true },
    ItemsService,
    StorageLevelsService,
    InventoriesService,
  ],
  imports: [CommonModule, SharedModule, InventoryRoutingModule],
})
export class InventoryModule {}
