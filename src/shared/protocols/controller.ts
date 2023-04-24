import { HttpResponse } from '@shared/protocols/http';

export interface Controller<T = any> {
  handle: (data?: T) => Promise<HttpResponse>;
}
