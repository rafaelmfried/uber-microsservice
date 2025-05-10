import { Controller } from '@nestjs/common';
import { RiderCoordinatesService } from './rider-coordinates.service';

@Controller('rider-coordinates')
export class RiderCoordinatesController {
  constructor(private readonly riderCoordinatesService: RiderCoordinatesService) {}
}
