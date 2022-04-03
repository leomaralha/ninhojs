import { Observable } from 'rxjs';

export interface IContextExecutorHandler<T = any> {
  handle(): Promise<Observable<T>>;
}