import { Logger, Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { SiteOutageService } from './site.outages.service';
import { InConfigModule } from '../config/config.module';

@Module({
  imports: [InConfigModule, HttpModule],
  controllers: [],
  providers: [SiteOutageService, Logger],
  exports: [SiteOutageService],
})
export class SiteOutageModule {}
