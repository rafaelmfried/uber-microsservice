import { Controller, Get } from '@nestjs/common';
import { LoggingService } from './logging.service';

@Controller()
export class LoggingController {
  constructor(private readonly loggingService: LoggingService) {}

  @Get()
  async getHello(): Promise<number> {
    // TEstando reload
    return await this.loggingService.getHello();
  }
}
