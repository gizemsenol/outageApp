import { Module, CacheModule } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { CacheUtils } from './utils/cache.utils';
import { AppService } from './app.service';
import { SiteInfoModule } from './modules/site-info/site.info.module';
import { SiteOutageModule } from './modules/site-outages/site.outages.module';
import { OutageModule } from './modules/outage/outage.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    CacheModule.register(),
    HttpModule,
    SiteInfoModule,
    SiteOutageModule,
    OutageModule,
  ],
  controllers: [AppController],
  providers: [AppService, CacheUtils],
})
export class AppModule {}
