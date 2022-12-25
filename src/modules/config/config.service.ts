import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class InConfigService {
  constructor(private configService: ConfigService) {}

  public getConfig(key: string) {
    return this.configService.get<any>(key);
  }
}
