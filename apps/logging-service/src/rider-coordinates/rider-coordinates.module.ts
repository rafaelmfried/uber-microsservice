import { Module } from '@nestjs/common';
import { RiderCoordinatesService } from './rider-coordinates.service';
import { RiderCoordinatesController } from './rider-coordinates.controller';

@Module({
  controllers: [RiderCoordinatesController],
  providers: [RiderCoordinatesService],
})
export class RiderCoordinatesModule {}
