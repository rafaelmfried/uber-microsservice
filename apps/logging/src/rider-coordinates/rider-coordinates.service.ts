import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { InjectDataSource } from '@nestjs/typeorm';
import { catchError, firstValueFrom, timeout } from 'rxjs';
import { DataSource } from 'typeorm';
import { RiderCoordinates } from '../entities/rider-coordinates.entity';

@Injectable()
export class RiderCoordinatesService {
  constructor(
    @InjectDataSource()
    private readonly dataSource: DataSource,
    @Inject('RIDER_SERVICE') private client: ClientProxy,
  ) {}

  async getRiderCoordinates(riderId: string): Promise<any> {
    try {
      const riderCoordinates: [RiderCoordinates[], number] =
        await this.dataSource
          .getRepository(RiderCoordinates)
          .findAndCount({ where: { riderId } });

      const pattern = { cmd: 'get-rider' };
      const payload = { id: riderId };
      const rider = await firstValueFrom(
        this.client.send(pattern, payload).pipe(
          timeout(5000),
          catchError((err) => {
            console.error('Error fetching rider:', err);
            throw new Error('Rider service is not available');
          }),
        ),
      );

      const coordinates = riderCoordinates[0].map((coordinate) => ({
        id: coordinate.id,
        latitude: coordinate.latitude,
        longitude: coordinate.longitude,
        timestamp: coordinate.timestamp,
      }));

      if (coordinates.length === 0) {
        return { message: 'No coordinates found for this rider' };
      }
      if (rider === null || rider === undefined) {
        return { message: 'Rider not found' };
      }

      return { coordinates, rider };
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException();
    }
  }

  async saveRiderCoordinates(data: {
    riderId: string;
    latitude: number;
    longitude: number;
  }): Promise<any> {
    const riderCoordinates = await this.dataSource
      .getRepository('rider_coordinates')
      .save({
        riderId: data.riderId,
        latitude: data.latitude,
        longitude: data.longitude,
      });
    return riderCoordinates;
  }
}
