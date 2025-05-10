import { Column, CreateDateColumn, ObjectId, ObjectIdColumn } from 'typeorm';

export class RiderCoordinates {
  @ObjectIdColumn()
  id: ObjectId;

  @Column({ nullable: false })
  riderId: string;

  @Column({ nullable: false })
  latitude: number;

  @Column({ nullable: false })
  longitude: number;

  @CreateDateColumn()
  timestamp: Date;
}
