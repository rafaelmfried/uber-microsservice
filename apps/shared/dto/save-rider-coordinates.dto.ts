import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class SaveRiderCoordinatesDto {
  @IsNotEmpty()
  @IsNumber()
  latitude: number;

  @IsNotEmpty()
  @IsNumber()
  longitude: number;

  @IsNotEmpty()
  @IsString()
  riderId: string;
}
