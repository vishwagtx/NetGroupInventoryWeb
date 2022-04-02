import { ILastActiveUser } from './last-active-user';

export interface IStatisticReponse {
  userStatistics: Array<IUserStatistic>;
  lastActiveUsers: Array<ILastActiveUser>;
}

export interface IUserStatistic {
  userId: string;
  userName: string;
  name: string;
  storageLevelCount: number;
  itemCount: number;
  inventoryCount: number;
}
