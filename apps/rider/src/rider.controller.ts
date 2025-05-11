import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { RiderService } from './rider.service';

@Controller()
export class RiderController {
  constructor(private readonly riderService: RiderService) {}

  @MessagePattern({ cmd: 'get-rider' })
  async getRiderById(data: any) {
    return Promise.resolve({
      _id: data.id,
      firstName: 'Rafael',
      lastName: 'Friederick',
      email: 'rafael.friederick@gmail.com',
    });
    // return this.riderService.getRiderById();
  }
}
