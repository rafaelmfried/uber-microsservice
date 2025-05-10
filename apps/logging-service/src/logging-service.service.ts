import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { RiderCoordinates } from './entities/rider-coordinates.entity';

@Injectable()
export class LoggingServiceService {
  constructor(private dataSource: DataSource) {}
  async getHello(): Promise<number> {
    return await this.dataSource.getMongoRepository(RiderCoordinates).count();
  }
}
