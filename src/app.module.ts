import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressModule } from './address/address.module';
import { CacheModule } from './cache/cache.module';
import { CityModule } from './city/city.module';
import { StateModule } from './state/state.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local'],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [`${__dirname}/**/infra/db/typeorm/entities/*{.ts,*.js}`],
      migrations: [`${__dirname}/typeorm/migration/{.ts,*.js}`],
      migrationsRun: true,
    }),
    UserModule,
    StateModule,
    CityModule,
    AddressModule,
    CacheModule,
  ],
  providers: [],
})
export class AppModule {}
