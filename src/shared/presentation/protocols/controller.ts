import { HttpResponse } from '@shared/presentation';

export interface Controller<T = any> {
  handle: (data?: T) => Promise<HttpResponse>;
}
