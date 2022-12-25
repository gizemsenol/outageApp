import { Test, TestingModule } from '@nestjs/testing';
import { SiteInfoService } from '../modules/site-info/site.info.service';
import { HttpModule } from '@nestjs/axios';
import { InConfigModule } from '../modules/config/config.module';

describe('SiteInfo', () => {
  let siteInfoService: SiteInfoService;
  beforeEach(async () => {
    const siteInfo: TestingModule = await Test.createTestingModule({
      imports: [HttpModule, InConfigModule],
      controllers: [],
      providers: [SiteInfoService],
    }).compile();

    siteInfoService = siteInfo.get<SiteInfoService>(SiteInfoService);
  });

  it('should be defined', () => {
    expect(siteInfoService).toBeDefined();
  });
});
