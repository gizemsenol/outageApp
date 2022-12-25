import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class InConfigUtils {
  constructor(private configService: ConfigService) {}

  public async getConfig(key: string) {
    this.configService.getOrThrow(key);
    return await this.configService.get<any>(key);
  }
}
