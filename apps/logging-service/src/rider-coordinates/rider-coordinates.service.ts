import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Injectable()
export class RiderCoordinatesService {
  constructor(
    @InjectDataSource()
    private readonly dataSource: DataSource,
  ) {}

  async getRiderCoordinates(riderId: string): Promise<any> {
    const riderCoordinates = await this.dataSource
      .getRepository('rider_coordinates')
      .findOne({ where: { riderId } });
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
