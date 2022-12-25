import { HttpModule } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';
import { OutageModule } from '../modules/outage/outage.module';
import { SiteInfoModule } from '../modules/site-info/site.info.module';
import { SiteOutageModule } from '../modules/site-outages/site.outages.module';
import { AppController } from '../app.controller';
import { AppService } from '../app.service';
import { CacheModule } from '@nestjs/common';
import { CacheUtils } from '../utils/cache.utils';

describe('App', () => {
  let appController: AppController;
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [
        OutageModule,
        SiteInfoModule,
        SiteOutageModule,
        HttpModule,
        CacheModule.register(),
      ],
      controllers: [AppController],
      providers: [AppService, CacheUtils],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  it('should be defined', () => {
    expect(appController).toBeDefined();
  });
});
