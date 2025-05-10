import { Controller, Get } from '@nestjs/common';
import { LoggingServiceService } from './logging-service.service';

@Controller()
export class LoggingServiceController {
  constructor(private readonly loggingServiceService: LoggingServiceService) {}

  @Get()
  async getHello(): Promise<number> {
    // TEstando reload
    return await this.loggingServiceService.getHello();
  }
}
