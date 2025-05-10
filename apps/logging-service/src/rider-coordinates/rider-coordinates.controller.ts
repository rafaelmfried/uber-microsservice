import { Body, Controller, Get, Post } from '@nestjs/common';
import { SaveRiderCoordinatesDto } from 'apps/shared/dto/save-rider-coordinates.dto';
import { RiderCoordinatesService } from './rider-coordinates.service';

@Controller('rider-coordinates')
export class RiderCoordinatesController {
  constructor(
    private readonly riderCoordinatesService: RiderCoordinatesService,
  ) {}

  @Get(':riderId')
  async getRiderCoordinates(riderId: string): Promise<any> {
    return await this.riderCoordinatesService.getRiderCoordinates(riderId);
  }

  @Post()
  async saveRiderCoordinates(
    @Body()
    saveRiderCoordinatesDto: SaveRiderCoordinatesDto,
  ): Promise<any> {
    return await this.riderCoordinatesService.saveRiderCoordinates(
      saveRiderCoordinatesDto.riderId,
      saveRiderCoordinatesDto.latitude,
      saveRiderCoordinatesDto.longitude,
    );
  }
}
