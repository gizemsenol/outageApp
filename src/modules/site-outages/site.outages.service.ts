import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { SiteOutage } from '../../dtos/site.outages.interface';
import { InConfigService } from '../config/config.service';

@Injectable()
export class SiteOutageService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: InConfigService,
  ) {}

  async setOutage(id: string, data: Array<SiteOutage>) {
    const [apiKey, baseUrl] = await Promise.all([
      this.configService.getConfig('X_API_KEY') as string,
      this.configService.getConfig('BASE_URL') as string,
    ]);
    try {
      return this.httpService.axiosRef.request({
        method: 'post',
        url: `${baseUrl}site-outages/${id}`,
        headers: {
          'x-api-key': apiKey,
        },
        data,
      });
    } catch (err) {
      console.log('err', err);
    }
  }
}
