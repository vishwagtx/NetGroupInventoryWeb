import { IExtendItem } from './item';

export interface IInventory {
  id?: number;
  storageLevelId: number;
  itemId: number;
  quantity?: number;
  serialNumber: string;
  note: string;
}

export interface IViewInventory extends IInventory {
  storageLevel: string;
  item: IExtendItem;
  createdDateTime: Date;
  modifiedDateTime: Date | null;
}
