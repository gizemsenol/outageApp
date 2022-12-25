import { Test, TestingModule } from '@nestjs/testing';
import { OutageService } from '../modules/outage/outage.service';
import { HttpModule } from '@nestjs/axios';
import { InConfigModule } from '../modules/config/config.module';
describe('Outage', () => {
  let outageService: OutageService;
  beforeEach(async () => {
    const outage: TestingModule = await Test.createTestingModule({
      imports: [HttpModule, InConfigModule],
      controllers: [],
      providers: [OutageService],
    }).compile();

    outageService = outage.get<OutageService>(OutageService);
  });

  it('should be defined', () => {
    expect(outageService).toBeDefined();
  });
});
