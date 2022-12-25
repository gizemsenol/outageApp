import { Injectable, Inject, CACHE_MANAGER } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class CacheUtils {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  public async readFromCache(key: string): Promise<any> {
    return await this.cacheManager.get(key);
  }
  public writeToCache(key: string, data: object) {
    this.cacheManager.set(key, data);
  }
}
