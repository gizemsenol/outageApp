import { Module, Logger } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { OutageService } from './outage.service';
import { InConfigModule } from '../config/config.module';

@Module({
  imports: [HttpModule, InConfigModule],
  controllers: [],
  providers: [OutageService, Logger],
  exports: [OutageService],
})
export class OutageModule {}
