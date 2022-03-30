import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryComponent } from './inventory.component';
import { ItemsService } from './services/items.service';
import { StorageLevelFormComponent } from './storage-levels/storage-level-form/storage-level-form.component';
import { SharedModule } from '../shared/shared.module';
import { StorageLevelsService } from './services/storage-levels.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppHttpInterceptor } from '../shared/interceptors/app-http-interceptor';

@NgModule({
  declarations: [InventoryComponent, StorageLevelFormComponent],
  providers: [
    ItemsService,
    StorageLevelsService,
    { provide: HTTP_INTERCEPTORS, useClass: AppHttpInterceptor, multi: true },
  ],
  imports: [CommonModule, SharedModule, InventoryRoutingModule],
})
export class InventoryModule {}
