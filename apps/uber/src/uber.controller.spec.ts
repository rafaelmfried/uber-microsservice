import { Test, TestingModule } from '@nestjs/testing';
import { UberController } from './uber.controller';
import { UberService } from './uber.service';

describe('UberController', () => {
  let uberController: UberController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UberController],
      providers: [UberService],
    }).compile();

    uberController = app.get<UberController>(UberController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(uberController.getHello()).toBe('Hello World!');
    });
  });
});
