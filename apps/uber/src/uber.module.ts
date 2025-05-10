import { Module } from '@nestjs/common';
import { UberController } from './uber.controller';
import { UberService } from './uber.service';

@Module({
  imports: [],
  controllers: [UberController],
  providers: [UberService],
})
export class UberModule {}
