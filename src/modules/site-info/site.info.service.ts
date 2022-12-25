import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { InConfigService } from '../config/config.service';

@Injectable()
export class SiteInfoService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: InConfigService,
  ) {}
  private readonly logger = new Logger(SiteInfoService.name);

  async findOne(id: string) {
    const [apiKey, baseUrl] = await Promise.all([
      this.configService.getConfig('X_API_KEY') as string,
      this.configService.getConfig('BASE_URL') as string,
    ]);
    try {
      return this.httpService.axiosRef.request({
        method: 'get',
        url: `${baseUrl}site-info/${id}`,
        headers: {
          'x-api-key': apiKey,
        },
      });
    } catch (err) {
      this.logger.error(err);
    }
  }
}
