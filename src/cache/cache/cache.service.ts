import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

type CacheServiceProps = {
  key: string;
  functionRequest: () => Promise<any>;
};

@Injectable()
export class CacheService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  async getCache<T>({ key, functionRequest }: CacheServiceProps): Promise<T> {
    const cache: T = await this.cacheManager.get(`${key}`);

    if (cache) {
      return cache;
    }
    const data: T = await functionRequest();

    await this.cacheManager.set(`${key}`, data);

    return data;
  }
}
