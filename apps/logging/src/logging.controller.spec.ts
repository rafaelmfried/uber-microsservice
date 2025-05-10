import { Test, TestingModule } from '@nestjs/testing';
import { LoggingController } from './logging.controller';
import { LoggingService } from './logging.service';

describe('LoggingController', () => {
  let loggingServiceController: LoggingController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [LoggingController],
      providers: [LoggingService],
    }).compile();

    loggingServiceController = app.get<LoggingController>(LoggingController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(loggingServiceController.getHello()).toBe('Hello World!');
    });
  });
});
