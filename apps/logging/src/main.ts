import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { LoggingModule } from './logging.module';

async function bootstrap() {
  const app = await NestFactory.create(LoggingModule);
  app.useGlobalPipes(new ValidationPipe());
  console.log(`Logging service is running on port ${process.env.port ?? 3000}`);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
