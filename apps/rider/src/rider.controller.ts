import { Controller, Get, Param } from '@nestjs/common';
import { RiderService } from './rider.service';

@Controller()
export class RiderController {
  constructor(private readonly riderService: RiderService) {}

  @Get()
  getRiderById(
    @Param()
    params: any,
  ) {
    return {
      _id: params.id,
      firstName: 'Rafael',
      lastName: 'Friederick',
      email: 'rafael.friederick@gmail.com',
    };
    // return this.riderService.getRiderById();
  }
}
