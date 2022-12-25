import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { InConfigService } from './config.service';

@Module({
  imports: [ConfigModule],
  controllers: [],
  providers: [InConfigService],
  exports: [InConfigService],
})
export class InConfigModule {}
