import { CacheModule as CacheModuleNest } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { CacheService } from './cache/cache.service';

@Module({
  imports: [
    CacheModuleNest.register({
      ttl: 20000,
    }),
  ],
  providers: [CacheService],
  exports: [CacheService],
})
export class CacheModule {}
