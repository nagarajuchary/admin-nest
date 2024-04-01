import { Test, TestingModule } from '@nestjs/testing';
import { AdminNestController } from './admin-nest.controller';

describe('AdminNestController', () => {
  let controller: AdminNestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdminNestController],
    }).compile();

    controller = module.get<AdminNestController>(AdminNestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
