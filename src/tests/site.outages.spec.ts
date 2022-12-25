import { Test, TestingModule } from '@nestjs/testing';
import { SiteOutageService } from '../modules/site-outages/site.outages.service';
import { HttpModule } from '@nestjs/axios';
import { InConfigModule } from '../modules/config/config.module';

describe('Outage', () => {
  let siteOutageService: SiteOutageService;
  beforeEach(async () => {
    const outage: TestingModule = await Test.createTestingModule({
      imports: [HttpModule, InConfigModule],
      controllers: [],
      providers: [SiteOutageService],
    }).compile();

    siteOutageService = outage.get<SiteOutageService>(SiteOutageService);
  });

  it('should be defined', () => {
    expect(siteOutageService).toBeDefined();
  });
});
