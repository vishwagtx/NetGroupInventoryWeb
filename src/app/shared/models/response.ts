export interface IReponse<T> {
  succeed: boolean;
  errors: Array<string>;
  id: T;
}
