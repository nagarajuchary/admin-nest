import { Test, TestingModule } from '@nestjs/testing';
import { AdminNestService } from './admin-nest.service';

describe('AdminNestService', () => {
  let service: AdminNestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdminNestService],
    }).compile();

    service = module.get<AdminNestService>(AdminNestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
