export interface IExecutionContext {
  getRequest<T>(): Promise<T>;
  getResponse<T>(): Promise<T>;
  getHandler(): Controller;
  eventName: string;
}
