import { NestFactory } from '@nestjs/core';
import { UberModule } from './uber.module';

async function bootstrap() {
  const app = await NestFactory.create(UberModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
