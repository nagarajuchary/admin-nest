import { Module } from '@nestjs/common';
import { AdminNestController } from './admin-nest.controller';
import { AdminNestService } from './admin-nest.service';

@Module({
  controllers: [AdminNestController],
  providers: [AdminNestService]
})
export class AdminNestModule {}
