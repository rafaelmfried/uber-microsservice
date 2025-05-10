import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { RiderCoordinates } from '../entities/rider-coordinates.entity';

@Injectable()
export class RiderCoordinatesService {
  constructor(
    @InjectDataSource()
    private readonly dataSource: DataSource,
  ) {}

  async getRiderCoordinates(riderId: string): Promise<any> {
    const riderCoordinates = await this.dataSource
      .getRepository(RiderCoordinates)
      .findAndCount({ where: { riderId } });
    return riderCoordinates;
  }

  async saveRiderCoordinates(
    riderId: string,
    latitude: number,
    longitude: number,
  ): Promise<any> {
    const riderCoordinates = await this.dataSource
      .getRepository('rider_coordinates')
      .save({ riderId, latitude, longitude });
    return riderCoordinates;
  }
  w;
}
