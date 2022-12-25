import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { RequestBody } from './dtos/site.outages.interface';

@Controller('/api/v1')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/outage')
  async outageCreate(@Body() requestBody: RequestBody) {
    return await this.appService.createOutage(
      requestBody.outageId,
      requestBody.date,
    );
  }
}
