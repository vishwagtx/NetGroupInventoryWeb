import { IExtendItem } from './item';

export interface IInventory {
  id?: number;
  storageLevelId: number;
  itemId: number;
  quantity?: number;
  serialNumber: string;
}

export interface IViewInventory extends IInventory {
  storageLevel: string;
  item: IExtendItem;
  modifiedDateTime: Date | null;
}
