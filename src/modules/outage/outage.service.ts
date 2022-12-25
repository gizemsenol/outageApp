import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { InConfigService } from '../config/config.service';

@Injectable()
export class OutageService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: InConfigService,
  ) {}
  private readonly logger = new Logger(OutageService.name);
  async findAll() {
    const [apiKey, baseUrl] = await Promise.all([
      this.configService.getConfig('X_API_KEY') as string,
      this.configService.getConfig('BASE_URL') as string,
    ]);
    try {
      return this.httpService.axiosRef.request({
        method: 'get',
        url: `${baseUrl}outages`,
        headers: { 'x-api-key': apiKey },
      });
    } catch (err) {
      this.logger.error(err);
    }
  }
}
