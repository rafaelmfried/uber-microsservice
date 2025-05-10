import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { LoggingServiceModule } from './logging-service.module';

async function bootstrap() {
  const app = await NestFactory.create(LoggingServiceModule);
  app.useGlobalPipes(new ValidationPipe());
  console.log(`Logging service is running on port ${process.env.port ?? 3000}`);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
