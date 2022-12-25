import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { SiteInfoService } from './site.info.service';
import { InConfigModule } from '../config/config.module';

@Module({
  imports: [InConfigModule, HttpModule],
  controllers: [],
  providers: [SiteInfoService],
  exports: [SiteInfoService],
})
export class SiteInfoModule {}
