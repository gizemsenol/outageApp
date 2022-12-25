import { Injectable } from '@nestjs/common';

import { CacheUtils } from './utils/cache.utils';
import { SiteInfoService } from './modules/site-info/site.info.service';
import { SiteOutageService } from './modules/site-outages/site.outages.service';
import { OutageService } from './modules/outage/outage.service';
import { SiteInfo } from './dtos/site.info.interface';
import { SiteOutage } from './dtos/site.outages.interface';
import { Outage } from './dtos/outage.interface';

@Injectable()
export class AppService {
  constructor(
    private readonly outageService: OutageService,
    private readonly siteInfoService: SiteInfoService,
    private readonly siteOutageService: SiteOutageService,
    private readonly cacheUtils: CacheUtils,
  ) {}

  public prepareToPost(
    siteInfo: SiteInfo,
    outages: Array<Outage>,
    date: string,
  ): Array<SiteOutage> {
    const deviceIdList = siteInfo.devices.map((device) => device.id);
    const outageList = outages.filter(
      (outage) =>
        deviceIdList.includes(outage.id) &&
        new Date(outage.begin) >= new Date(date),
    );
    return outageList.map((outage) => {
      const device = siteInfo.devices.find((device) => device.id === outage.id);
      return { ...outage, name: device.name };
    });
  }

  public async createOutage(id: string, date: string) {
    let [outages, siteInfo] = await Promise.all([
      this.cacheUtils.readFromCache('outages') as unknown as Array<Outage>,
      this.cacheUtils.readFromCache(`siteInfo:${id}`) as unknown as SiteInfo,
    ]);
    if (!outages) {
      const outagesRes = await this.outageService.findAll();
      if (outagesRes.status === 200) {
        this.cacheUtils.writeToCache('outage', outagesRes.data);
        outages = outagesRes.data;
      }
    }
    if (!siteInfo) {
      const siteInfoRes = await this.siteInfoService.findOne(id);
      if (siteInfoRes.status === 200) {
        this.cacheUtils.writeToCache(`siteInfo:${id}`, siteInfoRes.data);
        siteInfo = siteInfoRes.data;
      }
    }
    const postData = this.prepareToPost(siteInfo, outages, date);
    const siteOutagesRes = await this.siteOutageService.setOutage(id, postData);
    return { statusCode: siteOutagesRes.status, postData };
  }
}
