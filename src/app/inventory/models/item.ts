export interface IItem {
  id?: number;
  title: string;
  categoryId: number;
  description: string;
  imageUrl: string;
}

export interface IViewItem extends IItem {
  category: string;
  createdDateTime: Date;
  modifiedDateTime: Date | null;
}
