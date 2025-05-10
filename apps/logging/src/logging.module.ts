import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RiderCoordinates } from './entities/rider-coordinates.entity';
import { LoggingController } from './logging.controller';
import { LoggingService } from './logging.service';
import { RiderCoordinatesModule } from './rider-coordinates/rider-coordinates.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () => ({
        type: 'mongodb',
        url: 'mongodb://mongo:27017/logging',
        synchronize: true,
        logging: true,
        entities: [RiderCoordinates],
      }),
    }),
    RiderCoordinatesModule,
  ],
  controllers: [LoggingController],
  providers: [LoggingService],
})
export class LoggingModule {}
