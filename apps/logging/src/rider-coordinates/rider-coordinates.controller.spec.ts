import { Test, TestingModule } from '@nestjs/testing';
import { RiderCoordinatesController } from './rider-coordinates.controller';
import { RiderCoordinatesService } from './rider-coordinates.service';

describe('RiderCoordinatesController', () => {
  let controller: RiderCoordinatesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RiderCoordinatesController],
      providers: [RiderCoordinatesService],
    }).compile();

    controller = module.get<RiderCoordinatesController>(
      RiderCoordinatesController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
