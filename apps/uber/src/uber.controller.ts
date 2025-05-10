import { Controller, Get } from '@nestjs/common';
import { UberService } from './uber.service';

@Controller()
export class UberController {
  constructor(private readonly uberService: UberService) {}

  @Get()
  getHello(): string {
    return this.uberService.getHello();
  }
}
